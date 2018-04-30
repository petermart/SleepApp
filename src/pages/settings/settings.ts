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
  public selectedTheme: String;
  constructor(public navCtrl: NavController, public settings:AppSettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      if (this.selectedTheme === "light-theme")
      {
        this.darktheme = false;
      }
      if (this.selectedTheme === "dark-theme")
      {
          this.darktheme = true;
      }
      //On instance created, get theme. Then, set darktheme to false if lighttheme, darktheme true if darktheme.
  }

  updateTheme()
  {
    this.darktheme = !this.darktheme;
      if (this.darktheme == true)
      {
        this.settings.setActiveTheme('dark-theme');
      }
      if (this.darktheme == false)
      {
          this.settings.setActiveTheme('light-theme');
      }
      //If darktheme, then set theme to dark, if lighttheme, set theme to light
  }

}
