// Function to roll the dice and update images
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
  document.querySelector(".img1").setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage2;
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  // Determine winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

// Run rollDice function when button is clicked
document.querySelector("button").addEventListener("click", rollDice);
