const d = document,
  $square = d.querySelectorAll(".square"),
  $mole = d.querySelectorAll(".mole"),
  $timeLeft = d.querySelector("#time-left"),
  $hammer = d.querySelector(".hammer");

let $score = d.querySelector("#score"),
  result = 0,
  hitPosition,
  currenTime = 60,
  timerId = null;

function randomSquare() {
  $square.forEach((className) => {
    className.classList.remove("mole");
  });

  let randomSquare = $square[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

$square.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      $score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currenTime--;
  $timeLeft.textContent = currenTime;

  if (currenTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game Over! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 500);

window.addEventListener("mousemove", (e) => {
  $hammer.style.top = e.pageY + "px";
  $hammer.style.left = e.pageX + "px";
});

$resetButton.addEventListener("click", () => {
  currenTime = 60;
});
