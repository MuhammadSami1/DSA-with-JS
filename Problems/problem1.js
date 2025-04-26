// Find All Unique Integers in an Array
// Given an array of integers, find all unique integers in the array.
// Example: Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5].


const uniqueIntegers = (array) => {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}


console.log(uniqueIntegers([1, 2, 2, 3, 4, 4, 5]));


