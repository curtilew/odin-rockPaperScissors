function getComputerChoice() {
    let ComputerNumberPick = Math.random() * 4

    if (ComputerNumberPick < 1) {
        return "rock"
    } else if (1 <= ComputerNumberPick && ComputerNumberPick < 2) {
        return "paper"
    } else {
        return "scissors"
    } 
}

function getHumanChoice() {
    let userChoice = prompt("Pick Rock, Paper, or Scissors: ");

    if (userChoice.toLowerCase() == "rock") {
        return "rock"
    } else if (userChoice.toLowerCase() == "paper") {
        return "paper"
    } else if (userChoice.toLowerCase() == "scissors") {
        return "scissors"
    }  else {
        alert("Invalid choice");
        getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice, scores) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        scores.computerScore++;
    } 
    
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        scores.humanScore++;
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        scores.humanScore++;
    } 
    
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        scores.humanScore++;
    } 
    
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        scores.computerScore++;
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        scores.computerScore++;
    } 
    
    else {
        console.log(`TIE! you picked ${humanChoice} and Computer picked ${computerChoice}`)
    }

    console.log(`SCORE.... USER: ${scores.humanScore} CPU: ${scores.computerScore}`)
}


function playGame() {
    let scores = {
        humanScore: 0,
        computerScore: 0
    }

    for (i=0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection, scores)
    }

    console.log(`Final Score USER: ${scores.humanScore} CPU: ${scores.computerScore}`)
    
    if (scores.humanScore > scores.computerScore) {
        console.log("YOU WIN THE GAME!!!")
    } else if (scores.humanScore == scores.computerScore) {
        console.log("TIE GAME.")
    } else {
        console.log("YOU LOSE.")
    } 
}




playGame()