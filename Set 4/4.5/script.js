'use strcit';

const person = {
  name: 'Rajesh',
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
  },
};

const anotherPerson = { name: 'Sunita' };

// 1.
person.greet.call(anotherPerson, 'Hello', '!');

// 2.
person.greet.apply(anotherPerson, ['Hello', '!']);

// 3.
const sunitaGreeter = person.greet.bind(anotherPerson, 'Hey', '...');
sunitaGreeter();

// 4. Explanation (difference between call, apply, bind)
/*
call:
- Immediately invokes the function
- Arguments are passed one by one

apply:
- Immediately invokes the function
- Arguments are passed as an array

bind:
- Does NOT invoke the function immediately
- Returns a new function with `this` permanently bound
- Useful when you want to reuse the function later
*/
