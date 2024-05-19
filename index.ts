#! /bin/usr/env node
import inquirer from "inquirer";

// Generate a random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
//creat funtion of playGame
async function playGame() {
  let attempts = 10;

  console.log('Welcome to the Number Guessing Game!');
  console.log(`I'm thinking of a number between 1 and 100. Can you guess it?`);
  // while loop will be used for iterate the 10 attaempts
  while (attempts > 0) {
    const { userGuess } = await inquirer.prompt({ //it will start with attempts greator than zero means 1st attempt.
      type: 'input',
      name: 'userGuess',
      message: `Attempt ${11 - attempts}: Enter your guess:`,
      validate: (input: string) => {
        const num = parseInt(input);
        if (isNaN(num) || num < 1 || num > 100) {
          return 'Please enter a valid number between 1 and 100.';
        }
        return true;
      },
    });

    const guess = parseInt(userGuess);

    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the correct number: ${randomNumber}`);
      break;
    } else if (guess < randomNumber) {
      console.log('Try a higher number.');
    } else {
      console.log('Try a lower number.');
    }

    attempts--;
  }

  if (attempts === 0) {
    console.log(`Sorry, you're out of attempts. The correct number was ${randomNumber}.`);
  }
}

playGame();
