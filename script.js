
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log('It\'s a tie!');
    }
    else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            console.log('Computer wins!');
            computerScore++;
        }
        else{
            console.log('You win!');
            userScore++;
        }
    }
    else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            console.log('Computer wins!');
            computerScore++;
        }
        else{
            console.log('You win!');
            userScore++;
        }
    }
    else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            console.log('Computer wins!');
            computerScore++;
        }
        else{
            console.log('You win!');
            userScore++;
        }
    }
    else{
        console.log('Invalid input');
    }
}


const buttonContainer = document.getElementById('buttonContainer');
const userScoreDisplay = document.getElementById('userScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

buttonContainer.addEventListener('click', function(event){

    if(event.target.tagName === 'BUTTON'){
        const userChoice = event.target.id;
    
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);  
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    }
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
    userScore=0;
    computerScore=0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
})