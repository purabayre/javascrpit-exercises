const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const alarm = document.getElementById('alarm');

let totalSeconds = 0;
let timer = null;
let isPaused = false;

// Ask notification permission
if ('Notification' in window) {
  Notification.requestPermission();
}

function updateDisplay() {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');

  display.textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  if (timer) return;

  if (!isPaused) {
    const h = Number(hoursInput.value) || 0;
    const m = Number(minutesInput.value) || 0;
    const s = Number(secondsInput.value) || 0;
    totalSeconds = h * 3600 + m * 60 + s;
  }

  if (totalSeconds <= 0) return;

  isPaused = false;

  timer = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(timer);
      timer = null;
      alarm.play();
      showNotification();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  isPaused = false;
  display.textContent = '00:00:00';
}

function showNotification() {
  if (Notification.permission === 'granted') {
    new Notification('⏰ Timer Complete!', {
      body: 'Your countdown has finished.',
    });
  }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
