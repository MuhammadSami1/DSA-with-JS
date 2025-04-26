//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// its loop method it goes through the array index from start to end and checks if the value is present in the array or not.

// case sensitive
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("Cat"));
// Expected output: false

console.log(pets.includes("at"));
// Expected output: false