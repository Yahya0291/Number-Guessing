// Import the Inquirer library
//var inquirer = require('inquirer');
import inquirer from "inquirer";
// Generate a random number between 1 and 100 (inclusive)
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Define the game function
async function playGame() {
    let attempts = 10;
    console.log('Welcome to the Number Guessing Game!');
    console.log(`I'm thinking of a number between 1 and 100. Can you guess it?`);
    while (attempts > 0) {
        const { userGuess } = await inquirer.prompt({
            type: 'input',
            name: 'userGuess',
            message: `Attempt ${11 - attempts}: Enter your guess:`,
            validate: (input) => {
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
        }
        else if (guess < randomNumber) {
            console.log('Try a higher number.');
        }
        else {
            console.log('Try a lower number.');
        }
        attempts--;
    }
    if (attempts === 0) {
        console.log(`Sorry, you're out of attempts. The correct number was ${randomNumber}.`);
    }
}
// Start the game
playGame();
