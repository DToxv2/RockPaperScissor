let number;
let computerSel;
let humanSel;
let result;
let computerWins = 0;
let humanWins = 0;

function computerPlay() {
    number = Math.floor(Math.random() * 3);
    switch(number) {
        case 0:
            computerSel = 'rock';
            break;
        case 1:
            computerSel = 'paper';
            break;
        case 2:
            computerSel = 'scissor';
            break;
    }
    return computerSel;
}

function playRound (computerVar, humanVar) {
    if (computerSel == humanSel) {
        return result = "It's a tie!";
    } else if (computerSel == 'rock' && humanSel == 'paper') {
        return result = 'Human wins!';
    } else if (computerSel == 'paper' && humanSel == 'rock') {
        return result = 'Computer wins!';
    } else if (computerSel == 'scissor' && humanSel == 'paper') {
        return result = 'Computer wins!';
    } else if (computerSel == 'paper' && humanSel == 'scissor') {
        return result = 'Human wins!';
    } else if (computerSel == 'rock' && humanSel == 'scissor') {
        return result = 'Computer wins!';
    } else if (computerSel == 'scissor' && humanSel == 'rock') {
        return result = 'Human wins!';
    }
}

document.getElementById('roche').addEventListener('click', () => {
    humanSel = 'rock';
    console.log(humanSel);
    game();
});

document.getElementById('papier').addEventListener('click', () => {
    humanSel = 'paper';
    console.log(humanSel);
    game();
});

document.getElementById('ciseaux').addEventListener('click', () => {
    humanSel = 'scissor';
    console.log(humanSel);
    game();
});

function game () {

    const playResult = document.querySelector('.onGoing');
    const displayResultHuman = document.querySelector('.humanPoints');
    const displayResultPC = document.querySelector('.computerPoints');

    computerPlay();
    playRound(humanSel, computerSel);

    
        if (result == 'Human wins!') {
            humanWins = humanWins + 1;
            playResult.textContent = 'You win!';
        } else if (result == 'Computer wins!') {
            computerWins = computerWins + 1;
            playResult.textContent = 'You lost!'
        } else {
            playResult.textContent = 'Tie!';
        }

        displayResultHuman.textContent = `Your score: ${humanWins}`;
        displayResultPC.textContent = `Computer score: ${computerWins}`;


    console.log(result);
    console.log(humanWins);
    console.log(computerWins);
    
    restartGame();

    return playResult, displayResultHuman, displayResultPC;
}


function restartGame() {

    if (computerWins == 5 || humanWins == 5) {
        const container = document.querySelector('#game');
        const postResult = document.createElement('div');
        postResult.classList.add('resultAnoun');
        
        if (computerWins == 5) {
            postResult.textContent = 'Computer Wins!';
        } else if (humanWins == 5) {
            postResult.textContent = 'Human Wins!';
        }
    
        container.appendChild(postResult);

        computerWins = 0;
        humanWins = 0;   

        const playAgain = document.createElement('div');
        playAgain.textContent = 'Do you wanna play again?';

        const yesButton = document.createElement('button');
        const noButton = document.createElement('button');
        yesButton.textContent = "Oui";
        noButton.textContent = "Non";
        yesButton.setAttribute('id', 'yes');
        noButton.setAttribute('id', 'no');

        container.appendChild(playAgain);
        playAgain.appendChild(yesButton);
        playAgain.appendChild(noButton);
        
        document.getElementById('yes').addEventListener('click', () => {
            humanWins, computerWins = 0;
            playAgain.remove();
            yesButton.remove();
            noButton.remove();
            postResult.remove();
            const displayResultHuman = document.querySelector('.humanPoints');
            const displayResultPC = document.querySelector('.computerPoints');
            displayResultHuman.textContent = `Your score: ${humanWins}`;
            displayResultPC.textContent = `Computer score: ${computerWins}`;
            const playResult = document.querySelector('.onGoing');
            playResult.textContent = "";
        });

        document.getElementById('no').addEventListener('click', () => {
            const thankYou = document.createElement('div');
            thankYou.textContent = 'Merci! Vive la France';
            thankYou.setAttribute('padding', '20px;');
            container.appendChild(thankYou);
        });
    }
}