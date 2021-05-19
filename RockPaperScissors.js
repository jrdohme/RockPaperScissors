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
            //return "Computer Wins! Paper beats Rock";
            return 0;
        }else if (computerSelectionL == "scissors"){
            //return "You win! Rock beats Scissors";
            return 1;
        } else {
            //return "Tie Rock and Rock";
            return 2;
        }

    }else if (playerSelectionL == "paper"){
        if(computerSelectionL == "rock"){
            //return "You Win! Paper beats Rock";
            return 1;
        }else if(computerSelectionL == "scissors"){
            //return " Computer Wins! Scissors beats Paper";
            return 0;
        }else {
            //return "Tie Paper and Paper";
            return 2;
        }
    }else if (playerSelectionL == "scissors"){
        if(computerSelectionL == "rock"){
            //return "Computer Wins! Rock beats Scissors";
            return 0;
        }else if(computerSelectionL == "paper"){
            //return " You Win! Scissors beats Paper";
            return 1;
        }else {
            //return "Tie Scissors and Scissors";
            return 2;
        }
    }
}

function game(){

    var x;
    var playerScore = 0;
    var computerScore = 0;
    var roundResult;
    
    const playerSelection = "Rock";
    for (x=0;x < 5;x++){
        
        const computerSelection = computerPlay();

        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult == 0){
            console.log("You Lose!" + computerSelection + " beats " + playerSelection);
            computerScore++;
        }else if(roundResult == 1){
            console.log("You Win!" + playerSelection + " beats " + computerSelection);
            playerScore++;
        }else{
            console.log("Tie");
        }
    }

    if (computerScore > playerScore){
        console.log("You Lose!" + computerScore + " to " + playerScore);

    }else if(playerScore > computerScore){
        console.log("You Win!" + playerScore + " to " + computerScore);

    }else{
        console.log("Tie Game!")
    }
}

game();
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
