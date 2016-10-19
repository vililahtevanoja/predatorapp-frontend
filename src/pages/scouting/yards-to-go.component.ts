import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yards-to-go',
  templateUrl: 'yards-to-go.component.html'
})

export class YardsToGoComponent {
  constructor(
  ) {}
  @Input() initialYardsToGo: number;
  @Output() onYardsToGoChange: EventEmitter<number> = new EventEmitter<number>();
  yardsToGo: number = this.initialYardsToGo;
  yardsToGoMin: number = 0;
  yardsToGoMax: number = 40;

  updateYardsToGo(): void {
    this.onYardsToGoChange.emit(this.yardsToGo);
  }
}
