import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { ScoutDataService } from '../../services/scout-data.service';
import { Formation } from '../../models/formation';

@Component({
  selector: 'formation',
  templateUrl: 'formation.component.html',
})

export class FormationComponent implements OnInit {
  formations: Formation[];
  selectedFormation: Formation;
  @Output() onFormationChange: EventEmitter<Formation> = new EventEmitter<Formation>();
  @Output() onFormationAdded: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private scoutDataService: ScoutDataService,
    public alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.formations = <Formation[]>[];
    this.getFormations();
  }

  private sortedFormations(formations: Formation[]): Formation[] {
    let sortedFormations = formations.slice();
    sortedFormations.sort((f1, f2) => {
      if (f1.name > f2.name) {
        return 1;
      } else if (f1.name < f2.name) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedFormations;
  }

  getFormations(): void {
    this.scoutDataService
      .getFormations()
      .then(formations => this.formations = this.sortedFormations(formations));
  }

  selectFormation(formation: Formation): void {
    this.selectedFormation = formation;
    this.onFormationChange.emit(formation);
  }

  startAddFormation(): void {
    let alert = this.alertController.create({
      title: 'Add formation',
      inputs: [
        {
          name: 'formationName',
          placeholder: 'Formation name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            let formation: Formation = {name: data.formationName};
            this.scoutDataService.createFormation(formation).then(this.getFormations());
          }
        }
      ]
    });
    alert.present();
  }
}
