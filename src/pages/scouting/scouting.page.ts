import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameState } from './game-state';
import { Down, Strength, Direction } from "./types";
import { Formation } from '../../models/formation';
import { PlayType } from '../../models/play-type';

@Component({
  selector: 'page-scouting',
  templateUrl: 'scouting.page.html'
})
export class ScoutingPage {
  gameState: GameState;
  constructor(public navCtrl: NavController) {
    this.gameState = new GameState(1, 10);
  }

  onDownChange(newDown: Down): void {
    console.log("Down changed to: " + newDown.toString());
  }

  onYardsToGoChange(newYardsToGo: number): void {
    console.log("Yards to go changed to: " + newYardsToGo.toString());
  }

  onStrengthChange(newStrength: Strength): void {
    console.log("Strength changed to: " + newStrength.toString());
  }

  onFormationChange(newFormation: Formation): void {
    console.log("Formation changed to: " + newFormation.name.toString());
  }

  onFormationAdded(): void {

  }

  onPlayTypeChange(newPlayType: PlayType): void {
    console.log("Play changed to: " + newPlayType.name.toString());
  }

  onDirectionChange(newDirection: Direction): void {
    console.log("Direction changed to: " + newDirection.toString());
  }

  onGainedYardsChange(newGainedYards: number): void {
    console.log("Gained yards changed to: " + newGainedYards.toString());
  }

  onSave(event): void {

  }
}
