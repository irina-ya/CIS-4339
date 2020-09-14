class person{
    constructor(full_name){
        this.full_name = full_name;
    }
    //Methods
    split_name(){
        return this.full_name.split(' ');
    }

    fname() {
        return this.split_name()[0]
    }
    lname() {
        return this.split_name().slice(-1).join(' ');
        //Using slice since we cannot the the lenght of a method
    }

    //Getters
    get first_name(){
        return this.fname();
    }

    get last_name(){
        return this.lname();
    }
}

class tennis_player extends person {
    //initialize player based on the person class
    constructor(full_name){
        super(full_name);
        this.sets_won = 0;
        this.games_won = 0;
        this.games_lost = 0;
    }

    winSet(){
        return this.sets_won++; //adds 1 if player wins a set
    }

    winGame(){
        return this.games_won++; //adds to player's games_won
    }

    loseGame(){
        return this.games_lost++; //adds to player's games_lost
    }

    get Wins(){
        return this.games_won; //tracks games won
    }
    get Losses(){
        return this.games_lost; //tracks games lost
    }
    get SetsWon(){
        return this.sets_won;
    }
}

class tennis_game {
    constructor(player1, player2){

        //set up two players
        this.player1 = new tennis_player(player1);
        this.player2 = new tennis_player(player2);
        this.counter = 0;  
    }
    //play five sets
    playSets(){
        do {
            //generate a random number to see who won
            this.counter = Math.floor(Math.random() * 10);
            if ((this.counter) < 5) {
                this.player1.winSet(); 
            }
            else {
                this.player2.winSet(); 
            }
        } while ((this.player2.SetsWon) < 5 && ((this.player1.SetsWon) < 5)) //waits until one player won 5 sets
        document.getElementById("sets_won1").innerHTML = this.player1.first_name + " won " + this.player1.SetsWon + " sets."
        document.getElementById("sets_won2").innerHTML = this.player2.first_name + " won " + this.player2.SetsWon + " sets."
    }

    //Calculate the winner based on who won the most sets
    CalcWinner(){
        if (this.player2.sets_won > this.player1.sets_won){
            this.player2.winGame();
            this.player1.loseGame();
            document.getElementById("won_game").innerHTML = this.player2.first_name + " won the game!";
        }
        else {
            this.player1.winGame();
            this.player2.loseGame();
            document.getElementById("won_game").innerHTML = this.player1.first_name + " won the game!";
        }
    }
}

//Create players and start the game
function createPlayers(player1, player2){
    var NewGame = new tennis_game(player1, player2);
    NewGame.playSets();
    NewGame.CalcWinner();
    
}





