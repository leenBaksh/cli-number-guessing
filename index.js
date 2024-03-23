#!  /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number - done.
// 2) User input for guessing Number - Done
// 3) Compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessin Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("CONGRATULATION! yoy guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
