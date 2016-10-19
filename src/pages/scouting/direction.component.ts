import { Component, Output, EventEmitter } from '@angular/core';
import { Direction } from './types';

@Component({
  selector: 'direction',
  templateUrl: 'direction.component.html',
})

export class DirectionComponent {
  constructor(
  ) {}
  selectedDirection: Direction;
  @Output() onDirectionChange: EventEmitter<Direction> = new EventEmitter<Direction>();

  selectDirection(direction: Direction): void {
    this.selectedDirection = direction;
    this.onDirectionChange.emit(direction);
  }
}
