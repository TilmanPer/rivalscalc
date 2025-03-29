import { Component, computed, signal } from '@angular/core';
import { HeroesService } from '../_shared/services/heroes.service';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-magneto-calculator',
  imports: [MatSliderModule, FormsModule, MatTooltipModule, MatCheckboxModule],
  templateUrl: './magneto-calculator.component.html',
  styleUrl: './magneto-calculator.component.scss',
})
export class MagnetoCalculatorComponent {
  ultimateUptime = signal(0);
  ultimateAbsorb = signal(0);
  useLowestdamage = signal(false);

  damage = computed(() => {
    return 100 + this.ultimateUptime() * 50 + this.ultimateAbsorb() * 8;
  });
  damageFrom = computed(() => {
    if (this.range() < 6) {
      return this.damage() - ((this.damage() * 0.5) / 6) * this.range();
    } else {
      return this.damage() / 2;
    }
  });

  range = computed(() => {
    return 5 + this.ultimateUptime() * 0.75;
  });

  constructor(private heroService: HeroesService) {}

  survivingHeroes = computed(() => {
    return this.heroService
      .heroes()
      .filter(
        (hero) =>
          hero.health >
          (this.useLowestdamage() ? this.damageFrom() : this.damage())
      );
  });

  deadHeroes = computed(() => {
    return this.heroService
      .heroes()
      .filter(
        (hero) =>
          hero.health <=
          (this.useLowestdamage() ? this.damageFrom() : this.damage())
      );
  });
}
