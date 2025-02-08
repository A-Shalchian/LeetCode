const rpslist = ["r", "p", "s"];

const computersNum = Math.floor(Math.random() * 3);

const computerChoice = rpslist[computersNum];

const rpsGame = (choice) => {
  while (choice) {
    if (choice === computerChoice) {
      return "Tie!";
    } else if (choice === "r" && computerChoice === "p") {
      return "player loses";
    } else if (choice === "r" && computerChoice === "s") {
      return "player wins";
    } else if (choice === "p" && computerChoice === "r") {
      return "player wins";
    } else if (choice === "p" && computerChoice === "s") {
      return "player loses";
    } else if (choice === "s" && computerChoice === "p") {
      return "player wins";
    } else if (choice === "s" && computerChoice === "r") {
      return "player loses";
    } else {
      return "wrong thing";
    }
  }
};
console.log(computerChoice);

console.log(rpsGame("p"));
