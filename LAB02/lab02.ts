import * as prompt from "prompt";

type Choice = "ROCK" | "PAPER" | "SCISSORS";

function normalizeSelection(input: string): Choice | null {     

    const selection = input.trim().toUpperCase();
    if(selection ==="ROCK" || selection ==="PAPER" || selection ==="SCISSORS" ) {
        return selection
    }

    return null;

}

function getComputerSelection() : Choice {
    const random = Math.random(); //math random chooses between 0 to 1

    if(random <= 0.34) {
        return "PAPER";
    } else if(random <= 0.67) {
        return "SCISSORS"
    } else {
        return "ROCK"
    }
};

function choosingWinner(user: Choice, computer: Choice): "YAYAY! You Win" | "Xd! Computer Win" | "oh! thats a Tie " { 
    if(user === computer) {
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

prompt.get(["userSelection"], (err, result ) => {
    if (err) {
        console.log("Error !")
        return;
    }
        const userInput = String(result.userSelection);
        const userSelection = normalizeSelection(userInput);

        if(!userSelection) { 
            console.log("Invalid choice. Please write and choose Rock, Paper or Scissors")
            return;
        }

    const computerChoice = getComputerSelection();

    console.log("User selected : ", userSelection);
    console.log("Computer selected : ", computerChoice);

    const winner = choosingWinner(userSelection, computerChoice);
    console.log(winner);

});


