// concat() METHOD
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//The concat() method can take multiple arguments, which will be added to the array in the order they are provided.

const array4 = ["a", "b", "c"];
const array5 = ["d", "e", "f"];
const newArray = [1,2,3]

const array6 = array4.concat(array5, newArray);
console.log("Concat Method: ");
console.log(JSON.stringify(array6));