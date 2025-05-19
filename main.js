function getComputerChoice() {
    let choice = Math.random();

    if (choice <= 0.33) {
        choice = "rock";
    } else if (choice <= 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ");
    choice = choice.toLowerCase();

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return getHumanChoice();
    }

    return choice;
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log('Draw! booth choose ${humanChoice}.');
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log('You won! ${humanChoice} won ${computerChoice}.');
    humanScore++;
    document.getElementById("pdiv").innerHTML = `You won! ${humanChoice} won ${computerChoice}.`;
  } else {
    console.log('You Lost! ${computerChoice} won ${humanChoice}.');
    computerScore++;
  }
}

//console.log(playRound());

function playGame(humanChoice) {
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);     
}

function test(texto) {
  alert(texto);
}

console.log(playGame());

