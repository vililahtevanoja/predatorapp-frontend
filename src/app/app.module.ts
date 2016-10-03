import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScoutingPage } from '../pages/scouting/scouting';
import { HomePage } from '../pages/home/home';
import { BrowsePage } from "../pages/browsing/browse";
import { TabsPage } from '../pages/tabs/tabs';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { ScoutDataService } from '../services/scout-data.service';

import './rxjs-extensions';

@NgModule({
  declarations: [
    MyApp,
    ScoutingPage,
    BrowsePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScoutingPage,
    BrowsePage,
    TabsPage
  ],
  providers: [ScoutDataService]
})
export class AppModule {}
