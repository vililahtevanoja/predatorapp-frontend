import { Component } from '@angular/core';

import { ScoutDataService } from '../../services/scout-data.service';
import { Formation } from '../../models/formation';

@Component({
  selector: 'save-play',
  templateUrl: 'save-play.component.html',
})

export class SavePlayComponent {
  constructor(
    private scoutDataService: ScoutDataService
  ) {}

  onClick(): void {

  }
}
