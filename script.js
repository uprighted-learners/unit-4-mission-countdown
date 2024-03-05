const startTimeout = document.getElementById("start-timeout");
const timeoutDisplay = document.getElementById("timeout-display");
const startInterval = document.getElementById("start-interval");
const intervalDisplay = document.getElementById("interval-display");
const repeatGo = document.querySelectorAll(".repeat-go");

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

      const repeatGoArray = Array.from(repeatGo);
      let index = 0;
      const newInterval = setInterval(() => {
        repeatGoArray[index].textContent = "GO!";
        index += 1;

        if (repeatGoArray[index] === undefined) {
          clearInterval(newInterval);
        }
      }, 1000);
    }
  }, 1000);
});
