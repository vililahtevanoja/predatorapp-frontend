import { Component } from '@angular/core';
import { Strength } from './types';

@Component({
  selector: 'strength',
  templateUrl: 'strength.component.html'
})

export class StrengthComponent {
  constructor(
  ) {}
  selectedStrength: Strength;

  onSelect(strength: Strength): void {
    this.selectedStrength = strength;
  }
}
