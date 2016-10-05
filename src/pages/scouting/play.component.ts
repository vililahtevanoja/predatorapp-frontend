import { Component, OnInit } from '@angular/core';
import { PlayType } from '../../models/play-type';
import { ScoutDataService } from '../../services/scout-data.service';

@Component({
  selector: 'play',
  templateUrl: 'play.component.html'
})

export class PlayComponent implements OnInit {
  constructor(
    private scoutDataService: ScoutDataService
  ) {}

  playTypes: PlayType[] = [];
  selectedPlay: PlayType;

  ngOnInit(): void {
    this.getPlayTypes();
  }

  onSelect(play: PlayType): void {
    this.selectedPlay = play;
  }

  getPlayTypes(): void {
    this.scoutDataService.getPlayTypes().then(playTypes => this.playTypes = playTypes);
  }
}
