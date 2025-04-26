// unshift() METHOD
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
//The unshift() method is a mutating method, meaning it changes the original array.


const array1 = [1, 2, 3];
console.log("unshift Method: ");
const retArray1 = array1.unshift("kiwi");
console.log(retArray1); // 5 only the length of the array is returned
console.log(array1);
