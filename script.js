let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const playOptions = ["Rock", "Paper","Scissor"];

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase;
    playerSelection = playerSelection.toLowerCase();



}

function computerPlay(){

    console.log("inside computer play")
    return playOptions[Math.random() * playOptions.length]
}
