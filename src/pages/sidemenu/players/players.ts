import { PlayerService } from './../../../services/player.service';
import { Player } from './../../../models/player.model';
import { PlayerInfoPage } from './player-info/player-info';
import { ResultsPage } from './../../results/results';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  playerInfoPage = PlayerInfoPage;
  listOfPlayers: Player[];  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private playerService: PlayerService) {
  }
  ionViewWillEnter(){
    this.listOfPlayers = this.playerService.getPlayers();
   }


  onGoToAddPlayer(){
    this.navCtrl.push(PlayerInfoPage);
  }

}
