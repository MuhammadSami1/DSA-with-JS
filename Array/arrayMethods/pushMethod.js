// push() METHOD

//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// The push() method changes the length of the array.
// The push() method can take multiple arguments, which will be added to the array in the order they are provided.
// The push() method returns the new length of the array after the elements have been added.
// The push() method does not return the modified array itself, but rather the new length of the array after the elements have been added.
// The push() method is a mutating method, meaning it changes the original array.


const fruits = ["apple", "banana", "orange", "grape"];
console.log("Push Method: ");
const ret = fruits.push("kiwi");
console.log(ret); // 5 only the length of the array is returned
console.log(fruits);
