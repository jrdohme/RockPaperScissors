const buttons = document.querySelectorAll('input')
let playerScore = 0;
let computerScore = 0;

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

function game(playerSelection){

    var x;

    var roundResult;
    let result = 'test'
    
    
    //for (x=0;x < 5;x++){
        
        const computerSelection = computerPlay();

        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult == 0){
            console.log("You Lose!" + computerSelection + " beats " + playerSelection);
            computerScore++;
            result = "You Lose!" + computerSelection + " beats " + playerSelection + "Player: " + playerScore + " , Computer: " + computerScore;
        }else if(roundResult == 1){
            console.log("You Win!" + playerSelection + " beats " + computerSelection);
            playerScore++;
            result = "You Win!" + playerSelection + " beats " + computerSelection + "Player: " + playerScore + " , Computer: " + computerScore;
        }else{
            console.log("Tie");
            result = "Tie, Player: " + playerScore + " , Computer: " + computerScore;
        }
    //}
    if(computerScore == 5 || playerScore ==5){
        if (computerScore > playerScore){
            console.log("You Lose!" + computerScore + " to " + playerScore);
            result = "You Lose!" + computerScore + " to " + playerScore;
        }else if(playerScore > computerScore){
            console.log("You Win!" + playerScore + " to " + computerScore);
            result = "You Win!" + playerScore + " to " + computerScore;
        }else{
            console.log("Tie Game!")
            result = "Tie Game!";
        }
    }

    document.getElementById('result').innerHTML = result
}

//game();
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        game(button.value);
    })
})
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
