'use strict';
/*
Create a textarea input where:

- It shows "0 / 200 characters" below it
- As user types, the count updates
- When they hit 150 characters, the count turns orange
- At 180+, it turns red
- At 200, they can't type anymore
- Add a "Clear" button
*/

const textarea = document.getElementById('textInput');
const counter = document.getElementById('counter');
const clearBtn = document.getElementById('clearBtn');

const MAX_CHARS = 200;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;

  counter.textContent = `${length} / ${MAX_CHARS} characters`;
  counter.classList.remove('warning', 'danger');

  if (length >= 180) {
    counter.classList.add('danger');
  } else if (length >= 150) {
    counter.classList.add('warning');
  }
});

clearBtn.addEventListener('click', () => {
  textarea.value = '';
  counter.textContent = `0 / ${MAX_CHARS} characters`;
  counter.classList.remove('warning', 'danger');
  textarea.focus();
});
