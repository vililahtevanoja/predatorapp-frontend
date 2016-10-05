import { Component, OnInit } from '@angular/core';

import { ScoutDataService } from '../../services/scout-data.service';
import { Formation } from '../../models/formation';

@Component({
  selector: 'formation',
  templateUrl: 'formation.component.html',
})

export class FormationComponent implements OnInit {
  formations: Formation[];
  selectedFormation: Formation;
  constructor(
    private scoutDataService: ScoutDataService
  ) {}

  ngOnInit(): void {
    this.formations = <Formation[]>[];
    this.getFormations();
  }

  getFormations(): void {
    this.scoutDataService.getFormations().then(formations => this.formations = formations);
  }

  onSelect(formation: Formation): void {
    this.selectedFormation = formation;
  }
}
