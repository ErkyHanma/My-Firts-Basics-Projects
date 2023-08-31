const startButton = document.querySelector('.js-start-button');
const stopButton = document.querySelector('.js-stop-button');
const resetButton = document.querySelector('.js-reset-button');


let [hr, min, sec] = [0, 0, 0];
let intervalId;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

function start() {

  clearInterval(intervalId);
  

  document.querySelector('.js-timer-elem').classList.remove('timer-stopped'); 
  
  
  
  intervalId = setInterval(() => {
    sec++;
    document.querySelector('.js-sec').textContent = sec;

    if (sec === 60) {
      sec = 0;
      document.querySelector('.js-min').textContent = ++min;
    }

    if (min === 60) {
      min = 0;
      document.querySelector('.js-hour').textContent = ++hr;
    }
  }, 1000);
}

let isStopButton = false;

function stop() {
  if (!isStopButton) {
    clearInterval(intervalId); 
    document.querySelector('.js-timer-elem').classList.add('timer-stopped'); 
    isStopButton = true;
  } else {
    start();
    document.querySelector('.js-timer-elem').classList.remove('timer-stopped'); 
    isStopButton = false;
  }
}

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  document.querySelector('.js-timer-elem').classList.remove('timer-stopped'); 
  [hr, min, sec] = [0, 0, 0];
  document.querySelector('.js-sec').textContent = '00';
  document.querySelector('.js-min').textContent = '00';
  document.querySelector('.js-hour').textContent = '00';
});
