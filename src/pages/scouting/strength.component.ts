import { Component, Output, EventEmitter } from '@angular/core';
import { Strength } from './types';

@Component({
  selector: 'strength',
  templateUrl: 'strength.component.html'
})

export class StrengthComponent {
  constructor(
  ) {}
  @Output() onStrengthChange: EventEmitter<Strength> = new EventEmitter<Strength>();
  selectedStrength: Strength;

  selectStrength(strength: Strength): void {
    this.selectedStrength = strength;
    this.onStrengthChange.emit(strength);
  }
}
