import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerInfoPage } from './player-info';

@NgModule({
  declarations: [
    PlayerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerInfoPage),
  ],
})
export class PlayerInfoPageModule {}
