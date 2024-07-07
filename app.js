let secretNumber = 0;
let numbersList = [];
let maxNumber = 3;

function userTry() {
  let userNumber = parseInt(document.getElementById("userNumber").value);
  try {
    if (userNumber === secretNumber) {
      asignTextToElement("p", `Congrats. You wish the number in ${tries} ${tries == 1 ? "try" : "tries"}.`);
      document.getElementById("restart").removeAttribute("disabled");
      cleanElement("input");


    } else {
      if (userNumber < secretNumber) {
        asignTextToElement("p", "Number is higher.");
      } else {
        asignTextToElement("p", "Number is lower.");
      }
      cleanElement("input");
      tries++;
      // console.log(tries);
    }
  } catch { console.log("Data must be just a number. Please try again.") }
}

function cleanElement(element) {
  return document.querySelector(element).value = "";
}

function firstConditions() {
  asignTextToElement("h1", "Game of Wish the number.");
  asignTextToElement("p", `Write a number from 1 to ${maxNumber}: `);
  secretNumber = generateSecretNumber();
  tries = 1;
}

function restartGame() {
  cleanElement("input");
  firstConditions();
  document.getElementById("restart").setAttribute("disabled", "true")

}

function asignTextToElement(element, text) {
  let elementHtml = document.querySelector(element);
  elementHtml.innerHTML = text;
}

function generateSecretNumber() {
  let secretNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(secretNumber);
  console.log(numbersList);

  if (numbersList.length == maxNumber) {
    asignTextToElement("p", `You wished all number from 1 to ${maxNumber}.
      Click on New Game to star over.`)
    // document.querySelector("#restart").addEventListener(() => {
      numbersList = [];
      // restartGame;


  } else {
    if (numbersList.includes(secretNumber)) {
      return generateSecretNumber();
    } else {
      numbersList.push(secretNumber);
      return secretNumber;
    }
  }
}

firstConditions();

