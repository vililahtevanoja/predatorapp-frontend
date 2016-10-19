import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gained-yards',
  templateUrl: 'gained-yards.component.html'
})

export class GainedYardsComponent {
  constructor(
) {}
  @Output() onGainedYardsChange: EventEmitter<number> = new EventEmitter<number>();
  gainedYardsMin: number = 0;
  gainedYardsMax: number= 10;
  gainedYards: number;

  onSelect(yards: number): void {
    this.gainedYards = yards;
    this.onGainedYardsChange.emit(yards);
  }
}
