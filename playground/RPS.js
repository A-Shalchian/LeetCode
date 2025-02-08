const rpslist = ["r", "p", "s"];

const computersNum = Math.floor(Math.random() * 3);

const computerChoice = rpslist[computersNum];

const rpsGame = (choice) => {
  if (choice === computerChoice) {
    return "It's a tie!";
  }
  if (choice === "r") {
    if (computerChoice === "p") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
  if (choice === "p") {
    if (computerChoice === "s") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
  if (choice === "s") {
    if (computerChoice === "r") {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
  if (choice !== "r" || choice !== "p" || choice !== "s") {
    return "Invalid choice!";
  }
};

console.log(computerChoice);
console.log(rpsGame("p"));
console.log(rpsGame("r"));
