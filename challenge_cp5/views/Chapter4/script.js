class Start{
    constructor (){
            this.playerName = "Player"
            this.comName = "Computer"
            this.playerOption;
            this.comOption;
            this.winner = ""
    }

    get getComtOption(){
        return this.comOption;
    }

    set setComOption(option){
        this.comOption = option;
    }

    get getPlayerOption(){
        return this.playerOption
    }

    set setPlayerOption (option){
        this.playerOption = option;
    }

    comBrain() {
        const option = ['batu', 'kertas', 'gunting']
        const com = option[Math.floor(Math.random()* option.length)];
        return com;
        //setComOption = com;
        //console.log("computer pilih : ", com.toString());
    }

    winCalculation() {
        if (this.comOption == "kertas" && this.playerOption == "gunting") {
            return this.winner = this.playerName
        } else if (this.comOption == "kertas" && this.playerOption == "batu") {
            return this.winner = this.comName;
        } else if (this.comOption == "gunting" && this.playerOption == "kertas") {
            return this.winner = this.comName;
        } else if (this.comOption == "gunting" && this.playerOption == "batu") {
            return this.winner = this.playerName
        } else if (this.comOption == "batu" && this.playerOption == "kertas") {
            return this.winner = this.playerName
        } else if (this.comOption == "batu" && this.playerOption == "gunting") {
            return this.winner = this.comName;
        } else {
            return this.winner = "DRAW"
        }
    }

    matchResult() {
        if (this.winner != "DRAW") {
            return `${this.winner} MENANG!`;
        } else {
            return this.winner;
        }
    }

}


function pickOption(parameter){
    const start = new Start();
    // start.playerName;
    // start.comName;
    start.playerOption = parameter;
    start.comBrain();
    start.setComOption = start.comBrain();
    start.winCalculation();
    // console.log("kamu pilih", start.playerOption);


    const result = document.getElementById("result");
    result.textContent = "..."

    const resetButton = document.getElementById("refresh");

    setTimeout(() => {
        result.textContent = start.matchResult();
    }, 1500);
}