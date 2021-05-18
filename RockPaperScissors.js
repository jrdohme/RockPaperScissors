function computerPlay(){

    var random = Math.random() * 2;

    random = Math.ceil();

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

    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    
    if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            return "Computer Wins! Paper beats Rock";
        }else if (computerSelection == "Scissors"){
            return "You win! Rock beats Scissors";
        } else {
            return "Tie Rock and Rock";
        }

    }else if (playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            return "You Win! Paper beats Rock";
        }else if(computerSelection == "Scissors"){
            return " Computer Wins! Scissors beats Paper";
        }else {
            return "Tie Paper and Paper";
        }
    }else if (playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            return "Computer Wins! Rock beats Scissors";
        }else if(computerSelection == "Paper"){
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
