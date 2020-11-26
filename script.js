let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection = "";
let buttons = Array.from(document.querySelectorAll(".button"));
const playerWinner = "You Win!";
const computerWinner = "Computer Wins"
const tie = "It's a Tie!"
const playOptions = ["rock", "paper","scissor"];
const maxRounds = 5;
let totalRounds = 1;
const scorePlayer = document.querySelector(".player-score")
const scoreComputer = document.querySelector(".computer-score")
const message = document.querySelector(".message");

function game(playerSelection){

    let roundResult = playRound(playerSelection, computerSelection);

    if (totalRounds <= maxRounds){

        if(roundResult === playerWinner){
            playerScore++;
            totalRounds++;
        }else if (roundResult === computerWinner){
    
            computerScore++;
            totalRounds++;
        }else{
            totalRounds++;
        }
    
        console.log("scorePlayer: " + scorePlayer);
        scorePlayer.textContent = playerScore;
        console.log("playerScore: " + playerScore);
        scoreComputer.textContent = computerScore;
        message.textContent = roundResult;
    }

}

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    let answer = "";

    if(playerSelection == computerSelection){
        
        answer = tie;
        console.log(tie);
        return answer;
    }

    answer = playerWinner;

    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                answer = computerWinner;
            }
            break;
        case "paper":
            if(computerSelection === "scissor"){
                answer = computerWinner;
            }
            break;
        case "scissor":
            if(computerSelection === "rock"){
                answer = computerWinner;
            }
            break;
    }
console.log(answer);
    return answer; 
}

function computerPlay(){

    return playOptions[(Math.round(Math.random() * 2 ))];
}

function displayResults(text){
    
    message.textContent = text;

}

function declareWinner(playerScore, computerScore){

    return (playerScore > computerScore) ?  message.textContent = "Congratulations you won the game! Refresh to play again" : 
           (playerScore < computerScore) ?  message.textContent = "Game Over! You lost! Refresh to play again" : message.textContent = "You have a Tied Game! Refresh to play again";
 
}

buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        
        const rps = button.querySelector("p");
        playerSelection = rps.attributes.alt.value;
        
        if(totalRounds > maxRounds){

            declareWinner(playerScore, computerScore);
            return;
        }
        game(playerSelection);
        
        
    })
})