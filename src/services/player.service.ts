import { Player } from './../models/player.model';

export class PlayerService{
    private players: Player[] = [];

    addPlayer(firstName: string, 
        lastName: string,
        role: string, 
        motto: string,
        dob: string, 
        email: string,
        phoneNo: number){
        
        this.players.push(new Player(firstName, 
                                lastName, 
                                role, 
                                motto, 
                                dob, 
                                email, 
                                phoneNo));
        console.log(this.players);

    }

    addPlayers(items: Player[]){
        //if the input is a list of items, then ...items will do the job.
        this.players.push(...items);

    }

    getPlayers(){
        return this.players.slice();
    }

}