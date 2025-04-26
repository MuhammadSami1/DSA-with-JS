// shift() METHOD
// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
//The shift() method is a mutating method, meaning it changes the original array.

const array2 = [1, 2, 3];
console.log("shift Method: ");
const firstElement = array2.shift();
console.log(firstElement); // 1 only the length of the array is returned
console.log(array2);