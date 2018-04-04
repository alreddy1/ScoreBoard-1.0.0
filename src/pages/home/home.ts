import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { LoginPage } from '../sidemenu/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToResults(){
    this.navCtrl.push(ResultsPage);
  }

  onGoToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
