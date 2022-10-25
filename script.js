let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

let startBtn = document.getElementById("btn");

startBtn.addEventListener("click", () => {
  min = 5;
  sec = Math.floor(minutes * 60);
  console.log(sec);
  seconds.innerHTML = sec;
  minutes.innerHTML = min;
});
