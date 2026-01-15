'use strict';
// Build a counter that:

// - Shows current count (starts at 0)
// - Has buttons: +1, -1, +5, -5, Reset
// - Below the counter, show a history of all changes like:
//   - "0 → 1 (+1)"
//   - "1 → 6 (+5)"
//   - "6 → 5 (-1)"
// - Has a "Clear History" button

let count = 0;

const countEl = document.getElementById('count');
const historyEl = document.getElementById('history');

function changeCount(value) {
  const oldCount = count;
  count += value;

  countEl.textContent = count;

  const li = document.createElement('li');
  const sign = value > 0 ? `+${value}` : value;
  li.textContent = `${oldCount} → ${count} (${sign})`;

  historyEl.appendChild(li);
}

function resetCount() {
  if (count !== 0) {
    const oldCount = count;
    count = 0;
    countEl.textContent = count;

    const li = document.createElement('li');
    li.textContent = `${oldCount} → 0 (Reset)`;
    historyEl.appendChild(li);
  }
}

function clearHistory() {
  historyEl.innerHTML = '';
}
