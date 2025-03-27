function getComputerChoice() {
    let ComputerNumberPick = Math.random() + Math.random() + Math.random();

    if (ComputerNumberPick < 1) {
        return "rock"
    } else if (1 <= ComputerNumberPick.toLowerCase() < 2) {
        return "paper"
    } else if (2 <= ComputerNumberPick.toLowerCase() < 3) {
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1
    } 
    
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1
    } 
    
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1
    } 
    
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1
    } 
    
    else {
        console.log(`TIE! you picked ${humanChoice} and Computer picked ${computerChoice}`)
    }

    console.log(`SCORE.... USER: ${humanScore} CPU: ${computerScore}`)
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)