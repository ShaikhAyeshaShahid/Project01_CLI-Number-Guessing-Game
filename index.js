#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome Project-01 Cli Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * +1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit 1 to 5): ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations !!!, You guess a correct number.");
}
else {
    console.log("Try again");
}
