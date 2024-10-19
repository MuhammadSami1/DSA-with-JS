// Stack with Class using Array
class Stack {
    // Constructor
    constructor() {
        this.array = [];
        this.size = this.array.length;
        this.firstValue;
        this.maxValue = 4;
    }
    // Push function to add value from the end of stack

    push(data) {
        if (this.size <= this.maxValue) {
            this.array[this.size] = data;
            this.size++;
        } else {
            console.log("Stack is already Full");
        }
    }

    // Pop function to remove value from the end of stack
    pop() {
        if (this.size > 0) {
            this.size--;
            this.array.length = this.size;
        } else {
            console.log("Stack is already empty");
        }
    }

    //Top function to view the first value of stack 
    top() {
        if (this.size > 0) {

            this.firstValue = this.array[0]
        } else {
            console.log("Stack is already empty");
        }
    }
}

let stack = new Stack();
for (let i = 11; i <= 15; i++) {
    stack.push(i);
}
stack.pop();
stack.top();
console.log(stack);
