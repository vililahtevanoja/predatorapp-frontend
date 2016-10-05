import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { ScoutingPage } from './scouting.page';
import { DirectionComponent } from './direction.component';
import { DownComponent } from './down.component';
import { FormationComponent } from './formation.component';
import { GainedYardsComponent } from './gained-yards.component';
import { GameBrowserComponent } from './game-browser.component';
import { PlayComponent } from './play.component';
import { StrengthComponent } from './strength.component';
import { TargetComponent } from './target.component';
import { YardsToGoComponent } from './yards-to-go.component';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from '../../services/in-memory-data.service';
import { ScoutDataService } from '../../services/scout-data.service';

import '../../rxjs-extensions';

@NgModule({
  declarations: [
    ScoutingPage,
    DirectionComponent,
    DownComponent,
    FormationComponent,
    GainedYardsComponent,
    GameBrowserComponent,
    PlayComponent,
    StrengthComponent,
    TargetComponent,
    YardsToGoComponent
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [ScoutingPage],
  bootstrap: [IonicApp],
  entryComponents: [
    ScoutingPage,
    DirectionComponent,
    DownComponent,
    FormationComponent,
    GainedYardsComponent,
    GameBrowserComponent,
    PlayComponent,
    StrengthComponent,
    TargetComponent,
    YardsToGoComponent
  ],
  providers: [ScoutDataService]
})
export class ScoutingModule {}
