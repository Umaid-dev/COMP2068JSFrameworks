"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt");
function normalizeSelection(input) {
    var selection = input.trim().toUpperCase();
    if (selection === "ROCK" || selection === "PAPER" || selection === "SCISSORS") {
        return selection;
    }
    return null;
}
function getComputerSelection() {
    var random = Math.random();
    if (random <= 0.34) {
        return "PAPER";
    }
    else if (random <= 0.67) {
        return "SCISSORS";
    }
    else {
        return "ROCK";
    }
}
;
function choosingWinner(user, computer) {
    if (user === computer) {
        return "oh! thats a Tie ";
    }
    if ((user === "ROCK" && computer === "SCISSORS") || user === "PAPER" && computer === "ROCK" || user === "SCISSORS" && computer === "PAPER") {
        return "YAYAY! You Win";
    }
    else {
        return "Xd! Computer Win";
    }
}
prompt.start();
prompt.get(["userSelection"], function (err, result) {
    if (err) {
        console.log("Error !");
        return;
    }
    var userInput = String(result.userSelection);
    var userSelection = normalizeSelection(userInput);
    if (!userSelection) {
        console.log("Invalid choice. Please write and choose Rock, Paper or Scissors");
        return;
    }
    var computerChoice = getComputerSelection();
    console.log("User selected : ", userSelection);
    console.log("Computer selected : ", computerChoice);
    var winner = choosingWinner(userSelection, computerChoice);
    console.log(winner);
});
