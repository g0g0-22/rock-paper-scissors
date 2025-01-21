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
function getUserChoice(){
    let userInput = prompt('rock, paper, or scissors?');
    userInput = userInput.toLowerCase();
    return userInput;
}


let userScore = 0;
let computerScore = 0;

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
for(let i = 0; i < 5; i++){
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);  
    console.log('Round ' + (i + 1));
    console.log('User Score: ' + userScore);
    console.log('Computer Score: ' + computerScore);
    console.log(' ');
}
console.log('Final Score:');
console.log('User Score: ' + userScore);
console.log('Computer Score: ' + computerScore);

