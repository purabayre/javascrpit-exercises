'use strcit';

function createCounter(start = 0) {
  let count = start;
  const initial = start;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
    reset() {
      count = initial;
    },
  };
}

const counter = createCounter(10);

counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());

counter.reset();
console.log(counter.getCount());
