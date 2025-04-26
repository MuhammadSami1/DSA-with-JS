//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// its loop method it goes through the array index from start to end and checks if the value is present in the array or not.

// case sensitive


const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
