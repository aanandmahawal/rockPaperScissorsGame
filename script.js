const root = document.querySelector('#root');
const choices = document.querySelector("#choices");
const result = document.querySelector("#result");
const opted = document.querySelector('#opted');
const scoreline = document.querySelector("#scoreline");
const button = document.querySelector("button");
const arr = ["rock", "paper", "scissors"];
let score1 = 0;
let score2 = 0;

const giveWinner = (a, b) => {
  if (a == "rock" && b == "paper") return "pc";
  else if (a == "rock" && b == "scissors") return "player";
  else if (a == "paper" && b == "rock") return "player";
  else if (a == "paper" && b == "scissors") return "pc";
  else if (a == "scissors" && b == "rock") return "pc";
  else if (a == "scissors" && b == "paper") return "player";
  else return "none";
};

function gameLogic(event) {
  let playerChoice, pcChoice;
  playerChoice = event.target.id;
  
  if (playerChoice==arr[0] || playerChoice==arr[1] || playerChoice==arr[2]) {
    pcChoice = arr[Math.floor(Math.random() * 3)];

    let winner = giveWinner(playerChoice, pcChoice);
   
    opted.innerHTML = `${playerChoice} v/s ${pcChoice}`;
    if (winner == "player") {
      result.innerHTML = "You Won";
      score1++;
    } else if (winner == "pc") {
      result.innerHTML = "PC Won";
      score2++;
    } else result.innerHTML = "Draw";
    scoreline.innerHTML = `${score1} : ${score2}`;
    root.style.height = "90vh";
  
  }

}

choices.addEventListener("click", gameLogic);
button.addEventListener("click", () => {
  root.style.height = "80vh";
  result.innerHTML = "";
  opted.innerHTML = "";
  scoreline.innerHTML = "";
  score1 = 0;
  score2 = 0;
});
