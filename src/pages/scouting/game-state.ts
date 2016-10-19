import { Down } from './types';

export class GameState {
  constructor(down: Down, yardsToGo: number) {
    this.down = down;
    this.yardsToGo = yardsToGo;
  }
  down: Down;
  yardsToGo: number;
  getNewState(gainedYards: number): GameState {
    if (gainedYards >= this.yardsToGo) {
      return new GameState(1, 10);
    } else {
      return new GameState(this.down, this.yardsToGo - gainedYards);
    }
  }
}
