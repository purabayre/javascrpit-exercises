'use strict';

// 1.
function multiplyBy(n) {
  return function (value) {
    return value * n;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));

// 2.
function runOnce(fn) {
  let hasRun = false;

  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
  };
}

const initApp = runOnce(() => console.log('App initialized!'));

initApp();
initApp();

function delay(fn, ms) {
  return function (...args) {
    setTimeout(() => {
      fn(...args);
    }, ms);
  };
}

const delayedHello = delay(() => console.log('Hello after 2 seconds'), 2000);
delayedHello();
