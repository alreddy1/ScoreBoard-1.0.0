import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/sidemenu/login/login';
import { SignupPage } from '../pages/sidemenu/signup/signup';
import { LogoutPage } from '../pages/sidemenu/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = HomePage;
  loginPage = LoginPage;
  SignupPage = SignupPage;
  logoutPage = LogoutPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout(){
    console.log('Logged out.!');
 }

}
