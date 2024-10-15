// Stack with Array
let array = [];
let size = array.length;
let maxLength = 3;
// Push Function to value in Array
function push(data) {
    if (size > maxLength) {
        alert("Stack size is full")
    }
    array[size] = data;
    size++;
}

// Pop Function to delete top value
function pop() {
    if (size > 0) {
        size--;
        array.length = size;

    } else {
        alert("Stack is already empty")

    }

}

console.log(array);
push(2)
push(100)
push(200)
push(300)

console.log(array);
pop()
pop()
pop()
pop()
console.log(array);

