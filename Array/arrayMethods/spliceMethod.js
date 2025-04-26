// splice() METHOD
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("Slice Method: ");
console.log(animals.slice());
console.log(animals.slice(2)); // camel, duck, elephant
console.log(animals.slice(2, 4));