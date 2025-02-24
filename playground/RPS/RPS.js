const playerChoice = ["Rock", "Paper", "Scissors"];

function playRPS() {
  const input = document.getElementById("choice");
  let choice = input.value.trim();

  const botNumber = Math.floor(Math.random() * 3);
  const botChoice = playerChoice[botNumber];

  const botLoseMsg = `Bot loses with ${botChoice}!`;
  const botWinMsg = `Bot wins with ${botChoice}!`;

  if (choice.length === 1) {
    const lower = choice.toLowerCase();
    if (lower === "r") {
      choice = "Rock";
    } else if (lower === "p") {
      choice = "Paper";
    } else if (lower === "s") {
      choice = "Scissor";
    } else return displayResult("Invalid Choice!");
  }

  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

  let message;
  if (choice === botChoice) message = "You have tied";
  else if (choice === "Rock") {
    message = botChoice === "Paper" ? botWinMsg : botLoseMsg;
  } else if (choice === "Paper") {
    message = botChoice === "Scissors" ? botWinMsg : botLoseMsg;
  } else if (choice === "Scissors") {
    message = botChoice === "Rock" ? botWinMsg : botLoseMsg;
  } else message = "Invalid Choice!";

  displayResult(message);
}

function displayResult(message) {
  return (document.getElementById("result").innerHTML = message);
}
