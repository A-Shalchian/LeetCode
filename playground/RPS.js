const playerChoice = ["Rock", "Paper", "Scissor"];
const botNumber = Math.floor(Math.random() * 3);
const botChoice = playerChoice[botNumber];

const botLoseMsg = `Bot loses with ${botChoice}!`;
const botWinMsg = `Bot wins with ${botChoice}!`;

const rps = (choice) => {
  if (choice.length === 1) {
    const lower = choice.toLowerCase();
    if (lower === "r") choice = "Rock";
    else if (lower === "p") choice = "Paper";
    else if (lower === "s") choice = "Scissor";
    else return "Invalid Choice!";
  } else {
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  }

  if (choice === botChoice) return "You have tied!";

  if (choice === "Rock") {
    return botChoice === "Paper" ? botWinMsg : botLoseMsg;
  } else if (choice === "Paper") {
    return botChoice === "Scissor" ? botWinMsg : botLoseMsg;
  } else if (choice === "Scissor") {
    return botChoice === "Rock" ? botWinMsg : botLoseMsg;
  } else return "Invalid Choice!";
};

console.log(rps("r"));
