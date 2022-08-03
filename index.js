var diceLeft;
var diceRight;

diceLeft = Math.floor(6 * Math.random() + 1);
diceRight = Math.floor(6 * Math.random() + 1);

document.querySelector(".dice-left").setAttribute("src", "images/dice" + diceLeft + ".png");
document.querySelector(".dice-right").setAttribute("src", "images/dice" + diceRight + ".png");

if (diceLeft > diceRight) {
  document.querySelector("h1").textContent = "Player 1 Wins !";
} else if (diceLeft < diceRight) {
  document.querySelector("h1").textContent = "Player 2 Wins !";
} else {
  document.querySelector("h1").textContent = "It's a Draw !";

}
