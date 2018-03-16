import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppSettingsProvider } from '../../providers/app-settings/app-settings';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  // this tells the tabs component which Pages
  public darktheme: boolean;
  constructor(public navCtrl: NavController, public settings:AppSettingsProvider) {
  }

  updateTheme()
  {
    /*if (this.settings.getActiveTheme() === "light-theme"))
    {
        this.settings.setActiveTheme('dark-theme');
    }
    else
    {
      this.settings.setActiveTheme('light-theme');
    }*/
    console.log('updating theme');
  }

}
