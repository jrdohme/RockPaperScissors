function computerPlay(){

    var random = Math.random() * 2;

    random = Math.round(random);

    console.log(random);

    if (random == 0) {
        return "Rock";
    }else if (random == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection){
    //code

    playerSelectionL = playerSelection.toLowerCase();
    computerSelectionL = computerSelection.toLowerCase();
    console.log(computerSelectionL);
    
    if (playerSelectionL == "rock"){
        if (computerSelectionL == "paper"){
            return "Computer Wins! Paper beats Rock";
        }else if (computerSelectionL == "scissors"){
            return "You win! Rock beats Scissors";
        } else {
            return "Tie Rock and Rock";
        }

    }else if (playerSelectionL == "paper"){
        if(computerSelectionL == "rock"){
            return "You Win! Paper beats Rock";
        }else if(computerSelectionL == "scissors"){
            return " Computer Wins! Scissors beats Paper";
        }else {
            return "Tie Paper and Paper";
        }
    }else if (playerSelectionL == "scissors"){
        if(computerSelectionL == "rock"){
            return "Computer Wins! Rock beats Scissors";
        }else if(computerSelectionL == "paper"){
            return " You Win! Scissors beats Paper";
        }else {
            return "Tie Scissors and Scissors";
        }
    }
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
