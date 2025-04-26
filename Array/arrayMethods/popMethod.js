// pop() METHOD
//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
//The pop() method is a mutating method, meaning it changes the original array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

const retPlants = plants.pop();
console.log("POP Method: ");
console.log(retPlants); // 5 only the length of the array is returned
console.log(plants);