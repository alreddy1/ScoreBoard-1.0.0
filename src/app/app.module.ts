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
import { TeamsPage} from '../pages/teams/teams';

import { LoginPage } from '../pages/sidemenu/login/login';
import { SignupPage } from '../pages/sidemenu/signup/signup';
import { LogoutPage } from '../pages/sidemenu/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsPage,
    TabsPage,
    BattingPage,
    BowlingPage,
    TeamsPage,
    LoginPage,
    SignupPage,
    LogoutPage

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
    TeamsPage,
    LoginPage,
    SignupPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
