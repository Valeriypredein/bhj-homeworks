let timer = document.getElementById("timer");
let workTimer = function () {
  timer.textContent -= 1;
  if (timer.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(set);
  }
};
let set = setInterval(workTimer, 1000);