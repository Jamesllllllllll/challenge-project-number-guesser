let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return (Math.floor(Math.random() * 10));
}

/* TO DO:

Move absolute value calculation into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.

// const getAbsoluteDistance = (human, computer) => {
// 
//}

/* Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field. */

const compareGuesses = (human, computer, targetNumber) => {
    if (Math.abs(human - targetNumber) <= Math.abs(computer - targetNumber)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}


const advanceRound = () => {
    currentRoundNumber += 1;
}
