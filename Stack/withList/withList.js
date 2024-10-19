// Stack Singly Linked List
class LinkedList {
    // Constructor
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        }

        this.size = 1;
    }
    // Add node in linked list
    addNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: this.head,
        }
        this.head = newNode;
        this.size++;
    }
    // Remove node in linked list
    removeNode() {
        let removedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return removedValue;

    }
    firstValue() {
        return this.head.value;
    }
}

// Stack Class
class Stack {
    // Constructor
    constructor(data) {
        this.list = new LinkedList(data);
    }

    // Push function to add value in top of stack
    push(value) {
        this.list.addNode(value);

    }

    // Pop function to remove value from the top of stack
    pop() {
        this.list.removeNode();
    }
    // Print the top value in stack
    top() {
        console.log(`First Value: ${this.list.firstValue()}`);
    }
}

let stack = new Stack(200);
stack.push(100);
stack.push(300);
stack.pop();
stack.top();
console.log(stack);
