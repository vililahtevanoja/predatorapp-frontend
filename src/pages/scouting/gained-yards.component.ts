import { Component } from '@angular/core';

@Component({
  selector: 'gained-yards',
  templateUrl: 'gained-yards.component.html'
})

export class GainedYardsComponent {
  constructor(
) {}
  gainedYards: number;

  onSelect(yards: number): void {
    this.gainedYards = yards;
  }
}
