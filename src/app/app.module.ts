import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScoutingModule } from '../pages/scouting/scouting.module';
import { HomePage } from '../pages/home/home';
import { BrowsePage } from '../pages/browsing/browse';
import { TabsPage } from '../pages/tabs/tabs';
import { ScoutingPage } from '../pages/scouting/scouting.page';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

import '../rxjs-extensions';

@NgModule({
  declarations: [
    MyApp,
    BrowsePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ScoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScoutingPage,
    BrowsePage,
    TabsPage,
  ]
})
export class AppModule {}
