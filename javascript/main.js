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

    if (user === computer) 
    {
        console.log("It's a tie! Try again!");
        win = "none";
    } 
    else if (  (user === "rock"     && computer === "scissors")
            || (user === "paper"    && computer === "rock")
            || (user === "scissors" && computer === "paper"))
    {
        console.log("You win!");
        win = "user";
    }
    else if (  (computer === "rock"     && user === "scissors")
            || (computer === "paper"    && user === "rock")
            || (computer === "scissors" && user === "paper"))
    {
        console.log("Computer wins!");
        win = "computer";
    }
    else 
    {
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

