import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MagnetoCalculatorComponent } from "./magneto-calculator/magneto-calculator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MagnetoCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rivals-calc';
}
