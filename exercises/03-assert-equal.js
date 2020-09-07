// FUNCTION IMPLEMENTATION

// create a function that will return true or false based on whether the two arguments are equal
// the function should be able to handle strings, numbers, and arrays (don't worry about objects)
const assertEqual = function(actual, expected) {

};

// TEST CODE
console.log(`${assertEqual("Lighthouse Labs", "Bootcamp")}: should be false`)
console.log(`${assertEqual(1, 1)}: should be true`)
console.log(`${assertEqual([1, 2], [1, 2])} should be true`)
console.log(`${assertEqual([1, 2], [1, 3])} should be false`)