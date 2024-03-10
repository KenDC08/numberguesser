//Project Requirements: In this project, you’ll write four functions in script.js. We’ve provided some additional JavaScript code in game.js that will call your functions based on user interactions, but you don’t need to look at game.js and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. In this project, your JavaScript functions are incorporated into a website that also uses HTML/CSS. You’ll learn more about how to do this from scratch as you continue your JavaScript journey. Explore the completed version of the project to get a sense of what you’ll be building.
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  let humanDifference = Math.abs(targetGuess - humanGuess);
  let computerDifference = Math.abs(targetGuess - computerGuess);

  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++; //This means increasing the score by 1
  }
};

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber += 1; //This also means increasing the score by 1
};
