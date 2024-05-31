// Computer
let goElement = document.querySelector(".go-button"); // GO Button
let dieContent = document.querySelector(".js-first-dice"); // Computer first dice
let dieText = document.querySelector(".js-second-dice"); //computer second dice
// player
let hogerElement = document.querySelector(".higher-button"); // higher button
let lagerElement = document.querySelector(".lower-button"); // lower button
let hogerContent = document.querySelector(".js-third-dice"); // player first dice
let dieValue = document.querySelector(".js-forth-dice"); // player second dice

// result
let dobbleElement = document.querySelector(".dice-button"); // Gooi dobbelsteen button
let result = document.getElementById("result"); // winnaar wordt getoond

// credits
let computerCreditEl = document.querySelector(".computer-credits"); // Computer credit
let playerCreditEl = document.querySelector(".player-credits"); // Player credit
let playerCredit = 10;
let computerCredit = 10;

// Player Choice
let playerChoice; // higher or lower

// Able-disable buttons
hogerElement.disabled = true;
lagerElement.disabled = true;
dobbleElement.disabled = true;
goElement.addEventListener("click", function () {
  goElement.disabled = true;
  hogerElement.disabled = false;
  lagerElement.disabled = false;
  dobbleElement.disabled = true;
});
hogerElement.addEventListener("click", function () {
  playerChoice = "higher";
  goElement.disabled = true;
  hogerElement.disabled = true;
  lagerElement.disabled = true;
  dobbleElement.disabled = false;
});
lagerElement.addEventListener("click", function () {
  playerChoice = "lower";
  goElement.disabled = true;
  hogerElement.disabled = true;
  lagerElement.disabled = true;
  dobbleElement.disabled = false;
});
dobbleElement.addEventListener("click", function () {
  goElement.disabled = false;
  dobbleElement.disabled = true;
});
goElement.addEventListener("click", function () {
  result.innerHTML = "";
});
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// Dices Value
let diceVal1 = 0;
let diceVal2 = 0;
let diceVal3 = 0;
let diceVal4 = 0;
// Functions
// random number van 1-6
function dice1Function() {
  const action = getRandomIntInclusive(1, 6);
  console.log("dice1: ", action);

  switch (action) {
    case 1:
      dieContent.innerHTML = "&#9856;";
      diceVal1 = 1;
      break;
    case 2:
      dieContent.innerHTML = "&#9857;";
      diceVal1 = 2;
      break;
    case 3:
      dieContent.innerHTML = "&#9858;";
      diceVal1 = 3;
      break;
    case 4:
      dieContent.innerHTML = "&#9859;";
      diceVal1 = 4;
      break;
    case 5:
      dieContent.innerHTML = "&#9860;";
      diceVal1 = 5;
      break;
    default:
      dieContent.innerHTML = "&#9861;";
      diceVal1 = 6;
      break;
  }
}
// Functions
// random number van 1-6
function dice2Function() {
  const action = getRandomIntInclusive(1, 6);
  console.log("dice2: ", action);

  switch (action) {
    case 1:
      dieText.innerHTML = "&#9856;";
      diceVal2 = 1;
      break;
    case 2:
      dieText.innerHTML = "&#9857;";
      diceVal2 = 2;
      break;
    case 3:
      dieText.innerHTML = "&#9858;";
      diceVal2 = 3;
      break;
    case 4:
      dieText.innerHTML = "&#9859;";
      diceVal2 = 4;
      break;
    case 5:
      dieText.innerHTML = "&#9860;";
      diceVal2 = 5;
      break;
    default:
      dieText.innerHTML = "&#9861;";
      diceVal2 = 6;
      break;
  }
}
// Functions
// random number van 1-6
function dice3Function() {
  const action = getRandomIntInclusive(1, 6);
  console.log("dice3: ", action);

  switch (action) {
    case 1:
      hogerContent.innerHTML = "&#9856;";
      diceVal3 = 1;
      break;
    case 2:
      hogerContent.innerHTML = "&#9857;";
      diceVal3 = 2;
      break;
    case 3:
      hogerContent.innerHTML = "&#9858;";
      diceVal3 = 3;
      break;
    case 4:
      hogerContent.innerHTML = "&#9859;";
      diceVal3 = 4;
      break;
    case 5:
      hogerContent.innerHTML = "&#9860;";
      diceVal3 = 5;
      break;
    default:
      hogerContent.innerHTML = "&#9861;";
      diceVal3 = 6;
      break;
  }
}
// Functions
// random number van 1-6
function dice4Function() {
  const action = getRandomIntInclusive(1, 6);
  console.log("Dice4: ", action);

  switch (action) {
    case 1:
      dieValue.innerHTML = "&#9856;";
      diceVal4 = 1;
      break;
    case 2:
      dieValue.innerHTML = "&#9857;";
      diceVal4 = 2;
      break;
    case 3:
      dieValue.innerHTML = "&#9858;";
      diceVal4 = 3;
      break;
    case 4:
      dieValue.innerHTML = "&#9859;";
      diceVal4 = 4;
      break;
    case 5:
      dieValue.innerHTML = "&#9860;";
      diceVal4 = 5;
      break;
    default:
      dieValue.innerHTML = "&#9861;";
      diceVal4 = 6;
      break;
  }
};

// Go button  dice 1
// Wanneer er op de Go knop geklikt wordt, wordt de function  dice1Function(); toegepast.
goElement.addEventListener("click", function () {
  dice1Function();
});

// Go button dice 2
// Wanneer er op de Go knop geklikt wordt, wordt de function  dice2Function(); toegepast.
goElement.addEventListener("click", function () {
  dice2Function();
});

// Hoger dice 3
// Wanneer er op de Hoger knop geklikt wordt, wordt de function  dice3Function(); toegepast.
hogerElement.addEventListener("click", function () {
  dice3Function();
});

// lager dice 3
// Wanneer er op de Lager knop geklikt wordt, wordt de function  dice3Function(); toegepast.
lagerElement.addEventListener("click", function () {
  dice3Function();
});

// Hoger dice 4
// Wanneer er op de Hoger knop geklikt wordt, wordt de function  dice4Function(); toegepast.
hogerElement.addEventListener("click", function () {
  dice4Function();
});

// Lager dice 4
// Wanneer er op de Lager knop geklikt wordt, wordt de function  dice4Function(); toegepast.
lagerElement.addEventListener("click", function () {
  dice4Function();
});


// Hoger result
// Als de speler hoger had geraden wordt deze result togepast.
dobbleElement.addEventListener("click", function () {
  let totalComputerDice = diceVal1 + diceVal2;  // Total Computer dice value
  let totalPlayerDice = diceVal3 + diceVal4;  // Total Player dice Value
  console.log("This is total of the player", totalPlayerDice);
  console.log("This is total of the computer", totalComputerDice);
  computerCreditEl.innerHTML = computerCredit;
  playerCreditEl.innerHTML = playerCredit;

  if (playerChoice == "higher") {
    if (totalPlayerDice == totalComputerDice) {
      result.innerHTML = "Gelijk spel.";
      computerCreditEl.innerHTML = `${computerCredit}`;
      playerCreditEl.innerHTML = `${playerCredit}`;
    } else if (totalPlayerDice < totalComputerDice) {
      result.innerHTML = "Computer is de winnaar.";
      computerCreditEl.innerHTML = `${(computerCredit += 1)}`;
      playerCreditEl.innerHTML = `${(playerCredit -= 1)}`;
    } else if (totalPlayerDice > totalComputerDice) {
      result.innerHTML = "Je bent de winnaar.";
      computerCreditEl.innerHTML = `${computerCredit -= 1}`;
      playerCreditEl.innerHTML = `${playerCredit += 1}`;
    }
  }
});

// Lager result
// Als de speler lager had geraden wordt deze result togepast.
dobbleElement.addEventListener("click", function () {
  let totalComputerDice = diceVal1 + diceVal2; // Total Computer dice value
  let totalPlayerDice = diceVal3 + diceVal4; // Total Player dice Value
  computerCreditEl.innerHTML = 10;
  playerCreditEl.innerHTML = 10;

  if (playerChoice == "lower") {
    if (totalPlayerDice == totalComputerDice) {
      result.innerHTML = "Gelijk spel.";
      computerCreditEl.innerHTML = `${computerCredit}`;
      playerCreditEl.innerHTML = `${playerCredit}`;
    } else if (totalPlayerDice > totalComputerDice) {
      result.innerHTML = "Computer is de winnaar.";
      computerCreditEl.innerHTML = `${computerCredit += 1}`;
      playerCreditEl.innerHTML = `${playerCredit -= 1}`;
    } else if (totalPlayerDice < totalComputerDice) {
      result.innerHTML = "Je bent de winnaar.";
      computerCreditEl.innerHTML = `${computerCredit -= 1}`;
      playerCreditEl.innerHTML = `${playerCredit += 1}`;
    }
  }
  // Als een credit op 0 komt word de einde winnaar getoond. En de credits worden gereset.
  if (computerCredit == 0) {
    result.innerHTML = "Game over! You are the winnaar &#127873; &#127942; &#127881; &#127881; &#127881;  !!!";
    computerCreditEl.innerHTML = 10;
    playerCreditEl.innerHTML = 10;

  } else if (playerCredit == 0) {
    result.innerHTML = "Game over computer is the winnaar!!!";
    computerCreditEl.innerHTML = 10;
    playerCreditEl.innerHTML = 10;

  }

});

