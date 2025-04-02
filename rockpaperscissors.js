const container = document.querySelector('#container');

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

totalScore = {humanScore: 0, computerScore: 0}



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

function playRound(humanChoice, computerChoice, scores= totalScore) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        content.textContent =`You LOSE! ${computerChoice} beats ${humanChoice}`;
        scores.computerScore++;
    } 
    
    else if (humanChoice == "paper" && computerChoice == "rock") {
        content.textContent =`You WIN! ${humanChoice} beats ${computerChoice}`;
        scores.humanScore++;
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        content.textContent =`You WIN! ${humanChoice} beats ${computerChoice}`;
        scores.humanScore++;
    } 
    
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        content.textContent =`You WIN! ${humanChoice} beats ${computerChoice}`;
        scores.humanScore++;
    } 
    
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        content.textContent =`You LOSE! ${computerChoice} beats ${humanChoice}`;
        scores.computerScore++;
    } 
    
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        content.textContent =`You LOSE! ${computerChoice} beats ${humanChoice}`;
        scores.computerScore++;
    } 
    
    else {
        content.textContent =`TIE! you picked ${humanChoice} and Computer picked ${computerChoice}`;
    }

    content.textContent =`SCORE.... USER: ${scores.humanScore} CPU: ${scores.computerScore}`
}


function playGame() {
    let scores = {
        humanScore: 0,
        computerScore: 0
    }

    // for (i=0; i < 5; i++) {
    //     let humanSelection = getHumanChoice()
    //     let computerSelection = getComputerChoice()
    //     playRound(humanSelection, computerSelection, scores)
    // }

    content.textContent =`Final Score USER: ${scores.humanScore} CPU: ${scores.computerScore}`;
    
    if (scores.humanScore > scores.computerScore) {
        content.textContent ="YOU WIN THE GAME!!!";
    } else if (scores.humanScore == scores.computerScore) {
        content.textContent ="TIE GAME.";
    } else {
        content.textContent ="YOU LOSE.";
    } 
}



container.appendChild(content);
// playGame()