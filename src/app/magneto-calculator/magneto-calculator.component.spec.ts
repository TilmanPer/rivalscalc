import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnetoCalculatorComponent } from './magneto-calculator.component';

describe('MagnetoCalculatorComponent', () => {
  let component: MagnetoCalculatorComponent;
  let fixture: ComponentFixture<MagnetoCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnetoCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnetoCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
