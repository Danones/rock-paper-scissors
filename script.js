let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const playerWinner = "You Win!";
const computerWinner = "Computer Wins"

const playOptions = ["Rock", "Paper","Scissor"];

function game(playerSelect){

    let roundResult = playRound(playerSelection, computerSelection);




}

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay().toLowerCase;
    playerSelection = playerSelection.toLowerCase();
    let answer = "";
    
    if(playerSelection == computerSelection){
        answer ="It's a tie!";
    }

    answer = playerWinner;

    switch(playerSelection){
        case ROCK:
            if(computerSelection === "rock"){
                answer = computerWinner;
            }
            break;
        case PAPER:
            if(computerSelection === "paper"){
                answer = computerWinner;
            }
            break;
        case SCISSOR:
            if(computerSelection === "scissor"){
                answer = computerWinner;
            }
            break;
    }

    return answer; 
}

function computerPlay(){

    console.log("inside computer play")
    return playOptions[Math.random() * playOptions.length]
}

function displayResults(text){
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}
