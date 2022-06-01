function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  let random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

let computerPoints = 0;
let playerPoints = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    ++playerPoints
    return ("You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    ++computerPoints
    return ("You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    ++playerPoints
    return ("You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    ++computerPoints
    return ("You lose! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    ++playerPoints
    return ("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    ++computerPoints
    return ("You lose! Rock beats scissors");
  }

}

//Play an exact amount of rounds logic

function game() {
  //Create new div for results
  const container = document.querySelector('.container');
  const results = document.createElement('div');
  container.appendChild(results)

  //Make clicking buttons react to functions

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.className;

      //Make a player result appear

      const playerpp = document.querySelector('.playerpp');
      playerpp.style.color = 'blue';
      playerpp.textContent = 'Player points: ' + playerPoints;
      container.appendChild(playerpp);

      //Make a computer result appear

      const computerpp = document.querySelector('.computerpp');
      computerpp.style.color = 'red';
      computerpp.textContent = 'Computer points: ' + computerPoints;
      container.appendChild(computerpp);

     //Make computer's choice appear
     let computerSelection = computerPlay();
     const computerChoice = document.querySelector('.computerChoice');
     computerChoice.textContent = "Computer plays: " + computerSelection;
     container.appendChild(computerChoice);

     //Make the actual battle appear

     const battle = document.querySelector('.battle');
     battle.textContent = '' + playRound(playerSelection, computerSelection);
     container.appendChild(battle);


    })
  })
}

//console.log(("First to 3 wins!"));
game();