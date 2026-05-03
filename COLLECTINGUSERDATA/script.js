const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("Hello", name, "welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLowerCase() === "yes") {
  console.log("You have entered the game");
  const leftOrRight = prompt(
    "You entered a maze, do you want to move left or right? ",
  );

  if (leftOrRight.toLowerCase() == "right") {
    console.log("Sorry, No Way....");
  } else if (leftOrRight.toLowerCase() == "left") {
    console.log("You go left and see a bridge...");
    const crossBridge = prompt("Do you want to cross the bridge ");

    if (crossBridge.toLowerCase() === "yes") {
      console.log("you have crossed the bridge ");
    }
  }
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("okay :(");
} else {
  console.log("Invalid input");
}
