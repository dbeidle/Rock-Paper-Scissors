// Copyright 2021 Dave Beidle

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const computerChoice = () => {
  const choice = Math.ceil(Math.random() * 3);
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
};

const hiddenDiv = document.getElementById("hiddenDiv");
const computer = document.getElementById("computer");
const result = document.getElementById("results");

const setCompChoice = choice => {
  if (choice === "rock") {
    computer.innerHTML = `<i class="far fa-hand-rock"></i>`;
  } else if (choice === "paper") {
    computer.innerHTML = `<i class="far fa-hand-paper" ></i>`;
  } else {
    computer.innerHTML = `<i class="far fa-hand-scissors"></i>`;
  }
};

const playRound = playerChoice => {
  const comp = computerChoice();
  setCompChoice(comp);
  if (
    (comp === "rock" && playerChoice === "scissors") ||
    (comp === "scissors" && playerChoice === "paper") ||
    (comp === "paper" && playerChoice === "rock")
  ) {
    result.innerHTML = "You Lose!";
  } else if (comp === playerChoice) {
    result.innerHTML = "Draw..  Better luck next time...";
  } else {
    result.innerHTML = "You Win!";
  }
  hiddenDiv.classList.remove("hidden");
};

const fader = () => {
  const fadeOne = document.getElementById("one");
  const fadeTwo = document.getElementById("two");
  const fadeThree = document.getElementById("three");
  const rps = document.getElementById("rps");
  const main = document.getElementById("main");
  fadeOne.classList.add("fadeInOut");
  setTimeout(() => {
    fadeOne.classList.add("hidden");
    fadeTwo.classList.remove("hidden");
    fadeTwo.classList.add("fadeInOut");
  }, 3000);
  setTimeout(() => {
    fadeTwo.classList.add("hidden");
    fadeThree.classList.remove("hidden");
    fadeThree.classList.add("fadeInOut");
  }, 6000);
  setTimeout(() => {
    fadeThree.classList.add("hidden");
    rps.classList.remove("hidden");
    main.classList.remove("hidden");
  }, 9000);
  setTimeout(() => {
    main.classList.remove("hidden");
  }, 10500);
};
window.addEventListener("DOMContentLoaded", event => {
  fader();
  setTimeout(() => {
    document
      .getElementById("rock")
      .addEventListener("click", () => playRound("rock"));
    document
      .getElementById("paper")
      .addEventListener("click", () => playRound("paper"));
    document
      .getElementById("scissors")
      .addEventListener("click", () => playRound("scissors"));
  }, 11000);
});
