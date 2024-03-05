const startTimeout = document.getElementById("start-timeout");
const timeoutDisplay = document.getElementById("timeout-display");
const startInterval = document.getElementById("start-interval");
const intervalDisplay = document.getElementById("interval-display");

startTimeout.addEventListener("click", () => {
  timeoutDisplay.textContent = "Getting ready...";
  setTimeout(() => {
    timeoutDisplay.textContent = "READY";
  }, 5000);
});

startInterval.addEventListener("click", () => {
  let count = 5;
  let myInterval = setInterval(() => {
    intervalDisplay.textContent = count;
    count--;

    if (count < 0) {
      intervalDisplay.textContent = "GO";
      clearInterval(myInterval);
    }
  }, 1000);
});
