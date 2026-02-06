const dateInput = document.getElementById('dateInput');
const daysText = document.getElementById('daysText');
const breakdownText = document.getElementById('breakdown');
const presetButtons = document.querySelectorAll('.presets button');

function calculateDifference(targetDate) {
  const now = new Date();
  const diffMs = targetDate - now;
  const isPast = diffMs < 0;

  const absMs = Math.abs(diffMs);
  const totalDays = Math.floor(absMs / (1000 * 60 * 60 * 24));

  let years = Math.floor(totalDays / 365);
  let months = Math.floor((totalDays % 365) / 30);
  let days = (totalDays % 365) % 30;

  daysText.textContent = isPast
    ? `${totalDays} days since selected date`
    : `${totalDays} days until selected date`;

  breakdownText.textContent = `${years} years, ${months} months, ${days} days`;
}

dateInput.addEventListener('change', () => {
  if (!dateInput.value) return;
  calculateDifference(new Date(dateInput.value));
});

presetButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const now = new Date();
    let targetDate;

    if (btn.dataset.type === 'newyear') {
      targetDate = new Date(now.getFullYear() + 1, 0, 1);
    }

    if (btn.dataset.type === 'diwali') {
      // Diwali 2026 (example — adjust yearly)
      targetDate = new Date('2026-11-08');
    }

    dateInput.valueAsDate = targetDate;
    calculateDifference(targetDate);
  });
});

// Real-time update every second
setInterval(() => {
  if (dateInput.value) {
    calculateDifference(new Date(dateInput.value));
  }
}, 1000);
