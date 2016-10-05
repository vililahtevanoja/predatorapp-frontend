import { Component } from '@angular/core';

@Component({
  selector: 'down',
  templateUrl: 'down.component.html'
})

export class DownComponent {
  constructor(
  ) {}
  selectedDown: number;
  onSelect(down: number): void {
    this.selectedDown = down;
  }
}
