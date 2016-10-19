import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayType } from '../../models/play-type';
import { ScoutDataService } from '../../services/scout-data.service';

@Component({
  selector: 'play',
  templateUrl: 'play-type.component.html'
})

export class PlayTypeComponent implements OnInit {
  constructor(
    private scoutDataService: ScoutDataService
  ) {}

  @Output() onPlayTypeChange: EventEmitter<PlayType> = new EventEmitter<PlayType>();
  playTypes: PlayType[] = [];
  selectedPlayType: PlayType;

  ngOnInit(): void {
    this.getPlayTypes();
  }

  selectPlayType(playType: PlayType): void {
    this.selectedPlayType = playType;
    this.onPlayTypeChange.emit(playType);
  }

  getPlayTypes(): void {
    this.scoutDataService.getPlayTypes().then(playTypes => this.playTypes = playTypes);
  }
}
