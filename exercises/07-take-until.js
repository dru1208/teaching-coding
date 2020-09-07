/*

We will be implementing a function called take until

It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")
const takeUntil = function(array, callback) {
}


The function will return a "slice of the array with elements taken from the beginning."

It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

*/

// Example
const testArray = [1, 2, 3, "string", 4]
const callback = (val) => {
	return typeof val === "number"
}

// take until should return [1, 2, 3] since "string" is not a number"