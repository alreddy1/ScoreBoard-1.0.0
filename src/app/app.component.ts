import { PlayersPage } from './../pages/players/players';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/sidemenu/login/login';
import { SignupPage } from '../pages/sidemenu/signup/signup';
import { LogoutPage } from '../pages/sidemenu/logout/logout';
import { AuthService} from '../services/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = HomePage;
  playersPage = PlayersPage;
  loginPage = LoginPage;
  signupPage = SignupPage;
  logoutPage = LogoutPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              private authService: AuthService,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyCcQuHqRhEyS-kc6l5yf1UcsVeNUZYoXtk",
      authDomain: "scoreboard-linga.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        this.tabsPage = HomePage;
      }else{
        this.isAuthenticated = false;
        this.tabsPage = LoginPage;
      }
    });
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
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

}
