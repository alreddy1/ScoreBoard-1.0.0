import { PlayerService } from './../services/player.service';
import { PlayerInfoPage } from './../pages/sidemenu/players/player-info/player-info';
import { TeamsPage } from './../pages/sidemenu/teams/teams';
import { PlayersPage } from '../pages/sidemenu/players/players';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultsPage} from '../pages/results/results';
import { TabsPage } from '../pages/tabs/tabs';

import { BattingPage} from '../pages/batting/batting';
import { BowlingPage } from '../pages/bowling/bowling';

import { LoginPage } from '../pages/sidemenu/login/login';
import { SignupPage } from '../pages/sidemenu/signup/signup';
import { LogoutPage } from '../pages/sidemenu/logout/logout';

import { AuthService } from '../services/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsPage,
    TabsPage,
    BattingPage,
    BowlingPage,
    PlayersPage,
    PlayerInfoPage,
    LoginPage,
    SignupPage,
    LogoutPage,
    TeamsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultsPage,
    TabsPage,
    BattingPage,
    BowlingPage,
    PlayersPage,
    PlayerInfoPage,
    LoginPage,
    SignupPage,
    LogoutPage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PlayerService
  ]
})
export class AppModule {}
