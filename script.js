'use strict';
//Build a simple bill splitter. You're at a restaurant with friends and need to split the bill.

// Requirements:

// - Store the total bill amount (use 275.50 as test value)
// - Store number of people (4 people)
// - Store tip percentage (15%)
// - Calculate tip amount
// - Calculate total with tip
// - Calculate per person amount
// - Log everything nicely to console

console.log(`---exercise 1.1:- Bill calculater---`);

const billAmount = 275.5,
  people = 4,
  tipPercentage = 0.15;

const tipAmount = (billAmount * tipPercentage).toFixed(2);
const totalAmount = (billAmount + Number(tipAmount)).toFixed(2);
const amountPerPerson = (totalAmount / people).toFixed(2);

console.log(`Bill: ${billAmount.toFixed(2)}`);
console.log(`Tip(15%):${tipAmount}`);
console.log(`Total:${totalAmount}`);
console.log(`Per Person:${amountPerPerson}`);
console.log(`---exercise 1.2:- grade checker---`);

//Write a program that takes a student's marks and tells them their grade.

// Rules:

// - 90+ : A
// - 80-89: B
// - 70-79: C
// - 60-69: D
// - Below 60: F

// Test with these marks: 95, 82, 73, 61, 45

// Also add a message:

// - A or B: "Great job!"
// - C: "Not bad, keep it up"
// - D: "Need to work harder"
// - F: "See me after class"

function getGrade(marks) {
  let grade;

  if (marks >= 90) {
    grade = `A` + ` ,great job!`;
  } else if (marks >= 80) {
    grade = `B` + ` ,great job!`;
  } else if (marks >= 70) {
    grade = `C` + ` ,not bad keep it up `;
  } else if (marks >= 60) {
    grade = `D` + ` ,need to work harder`;
  } else {
    grade = `F` + ` ,meet me after class`;
  }

  console.log(`Grade: ${grade}`);
}

const marks = [95, 82, 73, 61, 45];

for (let i = 0; i < marks.length; i++) {
  getGrade(marks[i]);
}

// Print numbers from 1 to 50 but:

// - If divisible by 3, print "Fizz"
// - If divisible by 5, print "Buzz"
// - If divisible by both, print "FizzBuzz"
// - Otherwise just print the number

console.log('---exercise 1.3:- FizzBuzz--- ');

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

console.log('---exercise 1.4:- Shoping cart---');
// Do these tasks (one at a time, log results):

// 1. How many items in cart?
// 2. Add 'webcam' to the end
// 3. Add 'usb hub' to the beginning
// 4. Remove last item
// 5. Check if 'keyboard' is in the cart
// 6. Find position of 'mouse'
// 7. Remove 'monitor' from the cart (use splice)

const cart = ['laptop', 'mouse', 'keyboard', 'monitor', 'headphones'];

console.log(`1.there are ` + cart.length + ` items are there`);
cart.push('webcam');

console.log(`2. ${cart}`);
cart.unshift('usb hub');
console.log(`3. ${cart}`);
cart.pop();
console.log(`4. ${cart}`);
if (cart.includes('keyboard')) {
  console.log(`5.Keyboard is there`);
} else {
  console.log(`5.keyboard is not there`);
}
const positioonMouse = cart.indexOf('mouse');
console.log(`6.position of mouse is ` + positioonMouse);

const index = cart.indexOf('monitor');

if (index !== -1) {
  cart.splice(index, 1);
}

console.log(cart);

console.log(`---exercise 1.5:-object practice---`);
// Create an object for a movie with:

// - title
// - director
// - year
// - rating (out of 10)
// - genres (array)
// - cast (array of at least 3 actors)

// Add a method called `getSummary()` that returns something like: "The Dark Knight (2008) directed by Christopher Nolan, rated 9/10"

// Add another method `addGenre(genre)` that adds a genre to the genres array.
const movie = {
  title: 'The Dark Knight',
  director: 'Christopher Nolan',
  year: 2008,
  rating: 9,
  genres: ['Action', 'Crime', 'Drama'],
  cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],

  getSummary() {
    return `${this.title} (${this.year}) directed by ${this.director}, rated ${this.rating}/10`;
  },

  addGenre(genre) {
    this.genres.push(genre);
  },
};

console.log(movie.getSummary());

movie.addGenre('Thriller');
console.log(movie.genres);
