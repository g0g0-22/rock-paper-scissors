
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const rockImageHTML = '<img src="images/rock.png">'
const paperImageHTML = '<img src="images/paper.png">'
const scissorsImageHTML = '<img src="images/scissors.png">'

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
    computerChoiceDisplay.innerHTML = '';
    let computerChoiceImage;
    let winner;
    if(computerChoice ==='rock')
        computerChoiceImage = rockImageHTML;
    else if(computerChoice === 'paper')
        computerChoiceImage = paperImageHTML;
    else
        computerChoiceImage = scissorsImageHTML;


    if(userChoice === computerChoice)
        winner = 'It\'s a tie!';
        
    else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            winner = 'Computer wins!';
            computerScore++;
            
        }
        else{
            winner = 'You win!';
            userScore++;
        }
    }
    else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner = 'Computer wins!';
            computerScore++;
        }
        else{
            winner = 'You win!';
            userScore++;
        }
    }
    else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner = 'Computer wins!';
            computerScore++;
        }
        else{
            winner = 'You win!';
            userScore++;
        }
    }
    else{
        console.log('Invalid input');
    }
    computerChoiceDisplay.innerHTML = `${winner} The computer chose:    `;
    computerChoiceDisplay.innerHTML += computerChoiceImage;
}


const buttonContainer = document.getElementById('buttonContainer');
const userScoreDisplay = document.getElementById('userScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

buttonContainer.addEventListener('click', function(event){

    if(event.target.tagName === 'IMG'){
        const userChoice = event.target.id;
    
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);  
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    }
    console.log(event.target);
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
    userScore=0;
    computerScore=0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    computerChoiceDisplay.innerHTML = '';
});