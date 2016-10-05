import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScoutingPage } from '../scouting/scouting.page';
import { BrowsePage } from '../browsing/browse';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ScoutingPage;
  tab3Root: any = BrowsePage;

  constructor() {

  }
}
