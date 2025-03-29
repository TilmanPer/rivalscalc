import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes = signal<Hero[]>([]);

  constructor() {
    this.loadHeroes();
  }

  loadHeroes() {
    fetch('heroes.json')
      .then((response) => response.json())
      .then((data) => {
        this.heroes.set(data as Hero[]);
        console.log('Heroes loaded:', this.heroes());
      })
      .catch((error) => {
        console.error('Error loading heroes:', error);
      });
  }
}
