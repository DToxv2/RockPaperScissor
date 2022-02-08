let number;
let computerSel;
let humanSel;
let result;
let round = 1;
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

function humanPlay () {
    // while (humanSel != 'rock' || humanSel != 'paper' || humanSel != 'scissor') {
    //     humanSel = prompt("Choose wisely:");
    //     humanSel = humanSel.toLowerCase();
    //     }
    // return humanSel;

    humanSel = prompt("Choose wisely:").toLowerCase();
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

function game () {
    while (round <= 5) {

        computerPlay();
        humanPlay();
        playRound(humanSel, computerSel);

        if (result == 'Human wins!') {
            humanWins = humanWins + 1;
        } else if (result == 'Computer wins!') {
            computerWins = computerWins + 1;
        }

        console.log(result);
        console.log(humanWins);
        console.log(computerWins);

        round = round + 1;
    }
}

game()