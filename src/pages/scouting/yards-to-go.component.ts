import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yards-to-go',
  templateUrl: 'yards-to-go.component.html'
})

export class YardsToGoComponent {
  constructor(
  ) {}
  gainedYardsMin: number = 0;
  gainedYardsMax: number = 40;
  gainedYards: number = 0;

  onSelect(gainedYards: number): void {
    this.gainedYards = gainedYards;
  }
}
