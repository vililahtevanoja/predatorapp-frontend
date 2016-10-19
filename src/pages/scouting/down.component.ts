import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Down } from './types';

@Component({
  selector: 'down',
  templateUrl: 'down.component.html'
})

export class DownComponent {
  constructor(
  ) {}
  @Input() selectedDown: Down;
  @Output() onDownChange: EventEmitter<Down> = new EventEmitter<Down>();

  selectDown(down: Down): void {
    this.selectedDown = down;
    this.onDownChange.emit(this.selectedDown);
  }
}
