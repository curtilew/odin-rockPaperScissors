function getComputerChoice() {
    return Math.random() + Math.random() + Math.random()
}

function getHumanChoice() {
    let userChoice = prompt("Pick Rock, Paper, or Scissors: ");
    
    if (userChoice.toLowerCase() == "rock") {
        return 1
    } else if (userChoice.toLowerCase() == "paper") {
        return 1
    } else if (userChoice.toLowerCase() == "scissors") {
        return 1
    }  else {
        alert("Invalid choice");
        getHumanChoice()
    }
}

console.log(getHumanChoice())