import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DownInformation } from '../models/down-information';
import { Formation } from '../models/formation';
import { Game } from '../models/game';
import { PlayInformation } from '../models/play-information';
import { PlayType } from '../models/play-type';
import { Player } from '../models/player';
import { Position } from '../models/position';
import { Team } from '../models/team';

@Injectable()
export class ScoutDataService {
  constructor(private http: Http) {  }
  private rootUrl = 'app';
  private urls = {
    downInformations: this.rootUrl + '/downinformations',
    formations: this.rootUrl + '/formations',
    games: this.rootUrl + '/games',
    playInformations: this.rootUrl + '/playinformations',
    playTypes: this.rootUrl + '/playtypes',
    players: this.rootUrl + '/players',
    positions: this.rootUrl + '/positions',
    teams: this.rootUrl + '/teams'
  };
  private headers = new Headers({'Content-Type': 'application/json'});

  getDownInformations(): Promise<DownInformation[]> {
    return this.http.get(this.urls.downInformations)
      .toPromise()
      .then(response => response.json().data as DownInformation[])
      .catch(this.handleError);
  }

  getDownInformation(id: number): Promise<DownInformation> {
    return this.getDownInformations()
      .then(downInformations => downInformations.find(downInformation => downInformation.id === id));
  }

  createDownInformation(downInformation: DownInformation): Promise<DownInformation> {
    return this.http.post(this.urls.downInformations, JSON.stringify(downInformation))
      .toPromise()
      .then(res => res.json().data as DownInformation)
      .catch(this.handleError);
  }

  updateDownInformation(downInformation: DownInformation): Promise<DownInformation> {
    const url = '{$this.urls.downInformations}/${downInformation.id}';
    return this.http.post(url, JSON.stringify(downInformation), {headers: this.headers})
      .toPromise()
      .then(() => downInformation)
      .catch(this.handleError);
  }

  getFormations(): Promise<Formation[]> {
    return this.http.get(this.urls.formations)
      .toPromise()
      .then(response => response.json().data as Formation[])
      .catch(this.handleError);
  }

  getFormation(id: number): Promise<Formation> {
    return this.getFormations()
      .then(formations => formations.find(formation => formation.id === id));
  }

  createFormation(formation: Formation): Promise<Formation> {
    return this.http.post(this.urls.formations, JSON.stringify(formation))
      .toPromise()
      .then(res => res.json().data as Formation)
      .catch(this.handleError);
  }

  updateFormation(formation: Formation): Promise<Formation> {
    const url = '${this.urls.formations}/${formation.id}';
    return this.http.post(url, JSON.stringify(formation), {headers: this.headers})
      .toPromise()
      .then(() => formation)
      .catch(this.handleError);
  }

  getGames(): Promise<Game[]> {
    return this.http.get(this.urls.games)
      .toPromise()
      .then(response => response.json().data as Game[])
      .catch(this.handleError);
  }

  getGame(id: number): Promise<Game> {
    return this.getGames()
      .then(games => games.find(game => game.id === id));
  }

  createGame(game: Game): Promise<Game> {
    return this.http.post(this.urls.games, JSON.stringify(game))
      .toPromise()
      .then(res => res.json().data as Game)
      .catch(this.handleError);
  }

  updateGame(game: Game): Promise<Game> {
    const url = '${this.urls.games}/${game.id}';
    return this.http.post(url, JSON.stringify(game))
      .toPromise()
      .then(() => game)
      .catch(this.handleError);
  }

  getPlayInformations(): Promise<PlayInformation[]> {
    return this.http.get(this.urls.playInformations)
      .toPromise()
      .then(response => response.json().data as PlayInformation[])
      .catch(this.handleError);
  }

  getPlayInformation(id: number): Promise<PlayInformation> {
    return this.getPlayInformations()
      .then(playInformations => playInformations.find(playInformation => playInformation.id === id));
  }

  createPlayInformation(playInformation: PlayInformation): Promise<PlayInformation> {
    return this.http.post(this.urls.playInformations, JSON.stringify(playInformation))
      .toPromise()
      .then(res => res.json().data as PlayInformation)
      .catch(this.handleError);
  }

  updatePlayInformation(playInformation: PlayInformation): Promise<PlayInformation> {
    const url = '${this.urls.playInformations}/${playInformation.id}';
    return this.http.post(url, JSON.stringify(playInformation))
      .toPromise()
      .then(() => playInformation)
      .catch(this.handleError);
  }

  getPlayTypes(): Promise<PlayType[]> {
    return this.http.get(this.urls.playTypes)
      .toPromise()
      .then(response => response.json().data as PlayType[])
      .catch(this.handleError);
  }

  getPlayType(id: number): Promise<PlayType> {
    return this.getPlayTypes()
      .then(playTypes => playTypes.find(playType => playType.id === id));
  }

  createPlayType(playType: PlayType): Promise<PlayType> {
    return this.http.post(this.urls.playTypes, JSON.stringify(playType))
      .toPromise()
      .then(res => res.json().data as PlayType)
      .catch(this.handleError);
  }

  updatePlayType(playType: PlayType): Promise<PlayType> {
    const url = '${this.urls.playInformation}/${playType.id}';
    return this.http.post(url, JSON.stringify(playType))
      .toPromise()
      .then(() => playType)
      .catch(this.handleError);
  }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.urls.players)
      .toPromise()
      .then(response => response.json().data as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player[]> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id));
  }

  createPlayer(player: Player): Promise<Player> {
    return this.http.post(this.urls.players, JSON.stringify(player))
      .toPromise()
      .then(response => response.json().data as Player)
      .catch(this.handleError);
  }

  updatePlayer(player: Player): Promise<Player> {
    const url = '${this.urls.players}/${player.id}';
    return this.http.post(url, JSON.stringify(player))
      .toPromise()
      .then(() => player)
      .catch(this.handleError);
  }

  getPositions(): Promise<Position[]> {
    return this.http.get(this.urls.positions)
      .toPromise()
      .then(response => response.json().data as Position[])
      .catch(this.handleError);
  }

  getPosition(id: number): Promise<Position> {
    return this.getPositions()
      .then(positions => positions.find(position => position.id === id));
  }

  createPosition(position: Position): Promise<Position> {
    return this.http.post(this.urls.positions, JSON.stringify(position))
      .toPromise()
      .then(response => response.json().data as Position)
      .catch(this.handleError);
  }

  updatePosition(position: Position): Promise<Position> {
    const url = '${this.urls.positions}/${position.id}';
    return this.http.post(url, JSON.stringify(position))
      .toPromise()
      .then(() => position)
      .catch(this.handleError);
  }

  getTeams(): Promise<Team[]> {
    return this.http.get(this.urls.teams)
      .toPromise()
      .then(response => response.json().data as Team[])
      .catch(this.handleError);
  }

  getTeam(id: number): Promise<Team> {
    return this.getTeams().then(teams => teams.find(team => team.id === id));
  }

  createTeam(team: Team): Promise<Team> {
    return this.http.post(this.urls.teams, JSON.stringify(team))
      .toPromise()
      .then(response => response.json().data as Team)
      .catch(this.handleError);
  }

  updateTeam(team: Team): Promise<Team> {
    const url = '${this.url.teams}/${team.id}';
    return this.http.post(url, JSON.stringify(team))
      .toPromise()
      .then(() => team)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
