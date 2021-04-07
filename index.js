var state = history.state || {};

var reloadCount = state.reloadCount || 0;

if (performance.navigation.type === 1) { // Reload

  state.reloadCount = ++reloadCount;

  history.replaceState(state, null, document.URL);

} else if (reloadCount) {

  delete state.reloadCount;

  reloadCount = 0;

  history.replaceState(state, null, document.URL);

}

if (reloadCount > 0) {

  // code above delays js execution until user refresehs page for the first time

function rollDice(){

  var dice = Math.random() * 6 + 1; // or: Math.floor(Math.random()*6+1);
  result = Math.floor(dice);
  return result;
}

var randomNumber1 = rollDice();
var randomNumber2 = rollDice();
var diceImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
  "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var winner = document.querySelector("h1");
// how to get the attribute src of the tag img:
// document.querySelector("img").getAttribute("src");
// in order to change the value of the attribute:
// document.querySelector("img").setAttribute("src", "<here comes the new value>");

for (var i = 0; i < diceImg.length; i++) {

  if (randomNumber1 == i) {
    document.querySelector("img.img1").setAttribute("src", diceImg[i]);
    }
  if (randomNumber2 == i) {
    document.querySelector("img.img2").setAttribute("src", diceImg[i]);
    }
}


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "😎 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winner.textContent = "🤩 Player 2 Wins!";
} else {
  winner.textContent = "Draw 🤮";
}

}
