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
import { PlayTypeComponent } from './play-type.component';
import { StrengthComponent } from './strength.component';
import { TargetComponent } from './target.component';
import { YardsToGoComponent } from './yards-to-go.component';
import { SavePlayComponent } from './save-down.component';

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
    PlayTypeComponent,
    StrengthComponent,
    TargetComponent,
    YardsToGoComponent,
    SavePlayComponent
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
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
    PlayTypeComponent,
    StrengthComponent,
    TargetComponent,
    YardsToGoComponent,
    SavePlayComponent
  ],
  providers: [ScoutDataService]
})
export class ScoutingModule {}
