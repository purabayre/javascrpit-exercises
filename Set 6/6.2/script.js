'use strict';

class Counter {
  #count;
  #initial;

  constructor(start = 0) {
    this.#count = start;
    this.#initial = start;
  }

  // Getter
  get count() {
    return this.#count;
  }

  // Setter
  set count(value) {
    if (typeof value !== 'number') {
      throw new Error('Count must be a number');
    }
    this.#count = value;
  }

  // Method chaining
  increment() {
    this.#count++;
    return this;
  }

  decrement() {
    this.#count--;
    return this;
  }

  reset() {
    this.#count = this.#initial;
    return this;
  }

  // Static method to create random counter
  static createRandom(min = 0, max = 100) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Counter(randomValue);
  }
}

// Example usage

const counter = new Counter(10);

counter.increment().increment().decrement();

console.log(counter.count); // 11

counter.reset();
console.log(counter.count); // 10

// Random counter
const randomCounter = Counter.createRandom(5, 20);
console.log(randomCounter.count);
