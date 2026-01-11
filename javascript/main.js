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
    let comment = "";

    if (user === computer) 
    {
        comment = "It's a tie! Try again!";
        win = "none";
    } 
    else if (  (user === "rock"     && computer === "scissors")
            || (user === "paper"    && computer === "rock")
            || (user === "scissors" && computer === "paper"))
    {
        comment = "You win!";
        win = "user";
    }
    else if (  (computer === "rock"     && user === "scissors")
            || (computer === "paper"    && user === "rock")
            || (computer === "scissors" && user === "paper"))
    {
        comment = "Computer wins!";
        win = "computer";
    }
    else 
    {
        win = "none";
    }

    return [win, comment];
}

function score(lastWin) {
    let scoreAddition = 0;

    if (lastWin === "user") {
        userScore+=1;
        scoreAddition = userScore;
    }else if (lastWin === "computer") {
        computerScore+=1;
        scoreAddition = computerScore;
    }

    let score = document.querySelector(`.${lastWin}-score`);
    score.textContent = scoreAddition;


    // console.log(`The score is now ${userScore} to ${computerScore}!`);
}

function playRound(user) {

    if (user === "reset")
    {
        userScore = 0;
        computerScore = 0;

        let userScoreDisplay = document.querySelector(".user-score");
        let computerScoreDisplay = document.querySelector(".computer-score");
        let commentary = document.querySelector(".commentary");

        userScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        commentary.textContent = null;
    }
    else 
    {
        // let user = userInput();
        let computer = computerInput();

        let commentary = document.querySelector(".commentary");
        commentary.textContent = `You selected ${user}. The computer selected ${computer}. \n`;
        // console.log(`You selected ${user}. The computer selected ${computer}`);
        
        let results = winComparison(user, computer);
        let winner = results[0];
        let extraComment = results[1];

        commentary.textContent += `${extraComment}`;
        if (winner != "none") { score(winner); }
    }
}

