import { Component } from '@angular/core';
import { Direction } from './types';

@Component({
  selector: 'direction',
  templateUrl: 'direction.component.html',
})

export class DirectionComponent {
  constructor(
  ) {}
  selectedDirection: Direction;

  selectDirection(direction: Direction): void {
    this.selectedDirection = direction;
  }
}
