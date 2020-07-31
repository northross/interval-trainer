const container = document.getElementById('container');
const text = document.getElementById('text');
const timer = document.getElementById('timer');
const totalTime = 90000;
const workTime = (totalTime / 9) * 5;
const pushTime = totalTime / 9;
const leftTime = totalTime - (workTime + pushTime);

workAnimation();

let sweatCounter = 0;
let sweatTime = 10;
let restTime = 5;

// function conSeconds(s) {
//   let mins = floor(s / 60);
//   let sec = s % 60;
//   return min + ';' + sec;
// }

function setup() {
  // noCanvas();
  timer.innerText = '10';

  function timeIt() {
    sweatCounter++;
    // timer.innerText = sweatTime - counter;
    if (sweatTime > 0) {
      timer.innerText = sweatTime - sweatCounter;
    } else {
      counter = 0;
      timer.innerText = restTime - counter;
      counter++;
      sweatTime = 90000;
    }
  }
  setInterval(timeIt, 1000);
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
