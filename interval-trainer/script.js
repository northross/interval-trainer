const container = document.getElementById('container');
const text = document.getElementById('text');
const timer = document.getElementById('timer');
const totalTime = 90000;
const workTime = (totalTime / 9) * 5;
const pushTime = totalTime / 9;
const leftTime = totalTime - (workTime + pushTime);

workAnimation();

let sweatCounter = 0;
let sweatTime = 6000;
let restTime = 3000;
let counter = 0;

function round(num, places) {
  var multiplier = Math.pow(10, places);
  return Math.round(num * multiplier) / multiplier;
}

function setup() {
  timer.innerText = '10';

  function timeIt() {
    if (sweatTime - sweatCounter > -1) {
      sweatCounter++;
      if (sweatTime * 0.01 - sweatCounter < 10) {
        timer.innerText = round((sweatTime - sweatCounter) * 0.01, 2)
          .toString()
          .padStart(5, '0');
      } else {
        timer.innerText = round((sweatTime - sweatCounter) * 0.01, 2)
          .toString()
          .padEnd(5, '0');
      }
    } else {
      counter++;
      if (restTime * 0.01 - counter) {
        timer.innerText = round((restTime - counter) * 0.01, 2)
          .toString()
          .padStart(5, '0');
      } else {
        timer.innerText = round((restTime - counter) * 0.01, 2)
          .toString()
          .padEnd(5, '0');
      }
      if (restTime - counter < 0) {
        sweatCounter = 0;
        counter = 0;
      }
    }
  }
  setInterval(timeIt, 10);
}

function workAnimation() {
  text.innerText = 'Work Out!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Push';

    setTimeout(() => {
      text.innerText = 'Rest';
      container.className = 'container shrink';
    }, pushTime);
  }, workTime);
}
setInterval(setup(), totalTime * 5);
setInterval(workAnimation(), totalTime);
