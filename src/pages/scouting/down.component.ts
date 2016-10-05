import { Component } from '@angular/core';

@Component({
  selector: 'down',
  templateUrl: 'down.component.html'
})

export class DownComponent {
  constructor(
  ) {}
  selectedDown: number;

  selectDown(down: number): void {
    this.selectedDown = down;
  }
}
