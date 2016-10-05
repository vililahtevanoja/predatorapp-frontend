import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let playTypes = [
      { id: 1, name: 'run' },
      { id: 2, name: 'pass' }
    ];
    let formations = [
      { id: 1, name: 'split' },
      { id: 2, name: 'slot' },
      { id: 3, name: 'ACE' },
      { id: 4, name: 'triple' },
      { id: 5, name: 'I' }
    ];
    let playInformations = [
      { id: 1, name: 'toss', playTypeId: 1 },
      { id: 2, name: 'reverse', playTypeId: 1 },
      { id: 3, name: 'cross', playTypeId: 2 },
      { id: 4, name: 'out', playTypeId: 2 },
      { id: 5, name: 'lead', playTypeId: 2 },
      { id: 6, name: 'counter', playTypeId: 2 }
    ];
    let teams = [
      { id: 1, name: "Aalto Predators" },
      { id: 2, name: "Lappeenranta Wildmen" }
    ];
    let games = [
      { id: 1, homeTeamId: 1, visitorTeamId: 2, date: Date.now }
    ];
    return { playTypes, formations, playInformations, teams, games };
  }
}
