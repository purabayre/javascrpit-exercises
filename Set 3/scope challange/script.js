'use strict';

const a = 'global';

function outer() {
  const b = 'outer';

  function inner() {
    const c = 'inner';
    return c;
  }

  return inner;
}
/*the predicted output of this code is:

global outer inner
global outer
global

*/
const getC = outer();
console.log(getC());
