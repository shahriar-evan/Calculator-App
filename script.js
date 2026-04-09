let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value) {
  playSound();
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
    playSound();
  } catch {
    display.value = "Error";
  }
}

// Dark / Light mode
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  }
});

// Sound effect
function playSound() {
  let audio = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");
  audio.play();
}