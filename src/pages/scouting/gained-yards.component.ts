import { Component } from '@angular/core';

@Component({
  selector: 'gained-yards',
  templateUrl: 'gained-yards.component.html'
})

export class GainedYardsComponent {
  constructor(
) {}

  gainedYardsMin: number = 0;
  gainedYardsMax: number= 10;
  gainedYards: number;

  onSelect(yards: number): void {
    this.gainedYards = yards;
  }
}
