// fill() METHOD
//The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

const array = [1, 2, 3, 4];
console.log("Fill Method: ");

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]
