import { Component, OnInit } from '@angular/core';
import { PlayType } from '../../models/play-type';
import { ScoutDataService } from '../../services/scout-data.service';

@Component({
  selector: 'play',
  templateUrl: 'play-type.component.html'
})

export class PlayComponent implements OnInit {
  constructor(
    private scoutDataService: ScoutDataService
  ) {}

  playTypes: PlayType[] = [];
  selectedPlayType: PlayType;

  ngOnInit(): void {
    this.getPlayTypes();
  }

  selectPlayType(play: PlayType): void {
    this.selectedPlayType = play;
  }

  getPlayTypes(): void {
    this.scoutDataService.getPlayTypes().then(playTypes => this.playTypes = playTypes);
  }
}
