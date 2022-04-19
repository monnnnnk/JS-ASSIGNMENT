const form = document.querySelector(".form");
const range = document.querySelector(".range");
const num = document.querySelector(".num");
const say = document.querySelector("#say");
const result = document.querySelector(".result");

function submitted(event) {
  event.preventDefault();

  const rangeNum = range.value;
  const number = Math.floor(Math.random() * rangeNum + 1);
  console.log(number);

  sayResult(number);
}

function sayResult(number) {
  const inputNum = num.value;

  if (number == inputNum) {
    say.innerText = `You choose: ${inputNum},the machine choose: ${number}.
    `;
    result.innerText = `You won!`;
  } else {
    say.innerText = `You choose: ${inputNum},the machine choose: ${number}`;
    result.innerText = `You lose!`;
  }
}

form.addEventListener("submit", submitted);
