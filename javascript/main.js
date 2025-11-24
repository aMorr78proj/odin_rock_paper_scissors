let userScore = 0;
let computerScore = 0;

function userInput() {
    let input = prompt("Please enter your action (rock, paper, or scissors):");
    return input.toLowerCase();
}

function computerInput() {
    let guess = Math.floor(Math.random() * 3);

    if (guess == 0) {
        return "rock";
    } else if (guess == 1) {
        return "paper";
    } else if (guess == 2) {
        return "scissors";
    } else {
        return "none";
    }

}

function winComparison(user, computer) {
    let win = "";
    
    switch(user) {
        case "rock":
            if (computer === "paper") {
                console.log("The computer wins!");
                win = "computer";
                break;
            }
            else if (computer === "scissors") {
                console.log("You win!");
                win = "user";
                break;
            } 
            else {
                console.log("It's a tie! Try again!");
                win = "none";
                break;
            }
        case "paper":
            if (computer === "scissors") {
                console.log("The computer wins!");
                win = "computer";
                break;
            }
            else if (computer === "rock") {
                console.log("You win!");
                win = "user";
                break;
            } 
            else {
                console.log("It's a tie! Try again!");
                win = "none";
                break;
            }
        case "scissors":
            if (computer === "rock") {
                console.log("The computer wins!");
                win = "computer";
                break;
            }
            else if (computer === "paper") {
                console.log("You win!");
                win = "user";
                break;
            } 
            else {
                console.log("It's a tie! Try again!");
                win = "none";
                break;
            }
        default:
            win = "none";
    }

    return win;
}

function score(lastWin) {
    console.log(lastWin);
    if (lastWin === "user") {
        userScore+=1;
        console.log(userScore);
    }else if (lastWin === "computer") {
        computerScore+=1;
        console.log(computerScore);
    }

    console.log(`The score is now ${userScore} to ${computerScore}!`);
}

function playRound() {

    for (i=0; i<5; i++) {
        let user = userInput();
        let computer = computerInput();
        console.log(`You selected ${user}. The computer selected ${computer}`);
        let winner = winComparison(user, computer);
        score(winner);
    }
}

