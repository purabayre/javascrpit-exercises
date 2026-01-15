//Create a simple HTML page with:

//  A heading showing current hex color code
//  A button that says "Change Color"

// When button is clicked:

//  Generate a random hex color
//  Change background color to that color
//  Update the heading to show the new hex code

// Bonus: Add another button for "simple colors" that only uses predefined colors like red, blue, green, yellow, etc.

'use strict';

const colorCode = document.getElementById('colorCode');
const randomBtn = document.getElementById('randomBtn');
const simpleBtn = document.getElementById('simpleBtn');

function getRandomHexColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  ).toUpperCase();
}

randomBtn.addEventListener('click', () => {
  const hex = getRandomHexColor();
  document.body.style.backgroundColor = hex;
  colorCode.textContent = hex;
});

const simpleColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
  'orange',
];

simpleBtn.addEventListener('click', () => {
  const color = simpleColors[Math.floor(Math.random() * simpleColors.length)];
  document.body.style.backgroundColor = color;
  colorCode.textContent = color.toUpperCase();
});
