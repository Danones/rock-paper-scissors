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
    console.log("inside game");
    let roundResult = playRound(playerSelection, computerSelection);

    console.log("roundResult: " + roundResult);
    console.log("totalRounds: " + totalRounds);
    console.log("maxRounds: " + maxRounds);
    if (totalRounds <= maxRounds){
        console.log("inside while");
        console.log("roundResult: " + roundResult);
        if(roundResult === playerWinner){
            console.log("inside first if");
            playerScore++;
            totalRounds++;
        }else if (roundResult === computerWinner){
            console.log("inside else");
            computerScore++;
            totalRounds++;
        }else{
            console.log("TIE")
            totalRounds++;
        }
    
        console.log("scorePlayer: " + scorePlayer);
        scorePlayer.textContent = playerScore;
        console.log("playerScore: " + playerScore);
        scoreComputer.textContent = computerScore;
        message.textContent = roundResult;


    }else{
        console.log("inside ELSE")
        

    }

}

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    console.log("Computer Selection: " + " " + computerSelection)
    console.log("Player Selection: " + " "  + playerSelection);
    let answer = "";

    if(playerSelection == computerSelection){
        
        answer = tie;
        console.log(tie);
        return answer;
    }

    answer = playerWinner;
    console.log(playerWinner);
    console.log(playerSelection);
    switch(playerSelection){
        case "rock":
            console.log("inside Rock case");
            if(computerSelection == "paper"){
                answer = computerWinner;
            }
            break;
        case "paper":
            console.log("inside paper case");
            if(computerSelection === "scissor"){
                answer = computerWinner;
            }
            break;
        case "scissor":
            console.log("insisde scissor case");
            if(computerSelection === "rock"){
                answer = computerWinner;
            }
            break;
    }
console.log(answer);
    return answer; 
}

function computerPlay(){

    console.log("inside computer play")

    return playOptions[(Math.round(Math.random() * 2 ))];
}

function displayResults(text){
    console.log("inside displayResults")
    
    message.textContent = text;

}

function declareWinner(playerScore, computerScore){

    return (playerScore > computerScore) ?  message.textContent = "Congratulations you won the game! Refresh to play again" : 
           (playerScore < computerScore) ?  message.textContent = "Game Over! You lost! Refresh to play again" : message.textContent = "You have a Tied Game! Refresh to play again";
 
}

buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        console.log("inside button")
        
        const rps = button.querySelector("p");
        playerSelection = rps.attributes.alt.value;

        console.log("button pressed " +   playerSelection)
        
        if(totalRounds > maxRounds){
            console.log("calling declareWinner")
            declareWinner(playerScore, computerScore);
            return;
        }
        game(playerSelection);
        
        
    })
})