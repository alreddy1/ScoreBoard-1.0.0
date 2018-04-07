import { Player } from './../../../../models/player.model';
import { PlayerService } from './../../../../services/player.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-player-info',
  templateUrl: 'player-info.html',
})
export class PlayerInfoPage {
  
  listOfPlayers: Player[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            private playerService: PlayerService) {
  }

  ionViewWillEnter(){
   this.loadPlayers();
  }

  onAddPlayer(form: NgForm){
    this.playerService.addPlayer(form.value.firstName,
                                 form.value.lastName,
                                 form.value.role,
                                 form.value.motto,
                                 form.value.dob,
                                 form.value.email,
                                 form.value.phoneNo);
    form.reset();
    this.loadPlayers();
  }

  private loadPlayers(){
    this.listOfPlayers = this.playerService.getPlayers();
  }

}
