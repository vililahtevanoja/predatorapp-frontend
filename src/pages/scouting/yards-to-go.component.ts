import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yards-to-go',
  templateUrl: 'yards-to-go.component.html'
})

export class YardsToGoComponent {
  constructor(
  ) {}
  yardsToGoMin: number = 0;
  yardsToGoMax: number = 40;
  yardsToGo: number = 0;

  onSelect(yardsToGo: number): void {
    this.yardsToGo = yardsToGo;
  }
}
