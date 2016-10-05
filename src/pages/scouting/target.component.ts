import { Component } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'target',
  templateUrl: 'target.component.html'
})

export class TargetComponent {
  constructor(
  ) {}
  selectedTarget: Player;

  onSelect(target: Player): void {
    this.selectedTarget = target;
  }
}
