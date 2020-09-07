/*

Create a function called makeLoadedDie() which returns a function that when called,
seems to generate random numbers between 1 and 6, but in fact returns numbers in a row
from a hardcoded list.

Use the closure

*/

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  return function() {
    /* your code here */
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6