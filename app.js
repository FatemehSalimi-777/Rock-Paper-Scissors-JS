const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (computer === player) {
    return "Draw!";
  } else if (player === "rock") {
    return computer === "paper" ? "Computer Wins!" : "Player Wins!";
  } else if (player === "paper") {
    return computer === "rock" ? "Player Wins!" : "Computer Wins!";
  } else if (player === "scissors") {
    return computer === "rock" ? "Computer Wins!" : "Player Wins!";
  }
};

const showResult = (result) => {
  if (result === "Player Wins!") {
    playerScore++;
  } else if (result === "Computer Wins!") {
    computerScore++;
  } else "It's a tie!";
  console.log(`Result: ${result}`);
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log("---------------------");
};

const play = () => {
  const playerChoice = prompt("Choose Rock or Paper or Scissors:");

  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`*You Choose ${playerChoice}*`);
  } else {
    console.log("You Cheated!");
    return;
  }
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`*Computer Choose ${computerChoice}*`);
  // console.log(computerChoice , randomNumber);

  const winner = checkWinner(playerChoice, computerChoice);
  showResult(winner);
  

  if(playerScore === 5){
    console.log("You Win the Game!");
    return;
  } else if (computerScore === 5){
    console.log("computer Wins the Game!");
    return
  } else{
    play()
  }
};

play();

// if(computerChoice === playerChoice){
//     console.log("It's a tie!");
// } else if(playerChoice==="rock"){
//    if(computerChoice === "paper"){
//     console.log("You Lose!");
//    } else{
//     console.log("You Win!");
//    }
// } else if(playerChoice==="paper"){
// if(computerChoice === "rock"){
//     console.log("You Lose!");
// } else{
//     console.log("You Win!");
// }
// } else if(playerChoice==="scissors"){
// if(computerChoice === "rock"){
//     console.log("You Lose!");
// }else{
//     console.log("You Win!");
// }
// }
