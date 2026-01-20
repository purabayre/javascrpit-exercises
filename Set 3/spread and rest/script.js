'use strict';

// 1.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log('Merged Array:', mergedArray);

// 2.
const restaurant = {
  name: 'Food Plaza',
  location: 'Mumbai',
  menu: ['Pizza', 'Burger'],
};

const restaurantCopy = { ...restaurant };
console.log('Restaurant Copy:', restaurantCopy);

// 3.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('Sum:', sum(1, 2, 3, 4, 5));

// 4.
const str = 'JavaScript';
const charArray = [...str];

console.log('Character Array:', charArray);
