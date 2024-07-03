#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// 1) Computer will generate random number - done.

// 2) User input for guessing Number - Done

// 3) Compare user input with computer generated number and show result - done

console.log(
  chalk.magentaBright(
    "\n\t=============================== ---*** W E L C O M E ***--- ===============================\n"
  )
);
console.log(
  chalk.bgMagentaBright(
    "\n\t------------------------------- CLI NUMBER GUESSING GAME -------------------------------\n"
  )
);

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.magentaBright("CONGRATULATION! you guessed right number."))
}else {
    console.log(chalk.grey("you guessed wrong number"));
}




