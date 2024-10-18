// Stack with Class using Array
class Stack {
    // Constructor
    constructor() {
        this.array = [];
        this.size = this.array.length;
        this.firstValue;
    }
    // Push function to add value from the end of stack

    push(data) {
        this.array[this.size] = data;
        this.size++;
    }
    // Pop function to remove value from the end of stack

    pop() {
        this.size--;
        this.array.length = this.size;
    }

    //Top function to view the first value of stack 
    top() {
        this.firstValue = this.array[0]
    }
}

let stack = new Stack();
for (let i = 11; i <= 20; i++) {

    stack.push(i);
}
stack.pop();
stack.top();
console.log(stack);
