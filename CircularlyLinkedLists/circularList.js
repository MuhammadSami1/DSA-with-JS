class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    // Add Node in List
    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: this.head // Link new node to the head to maintain circularity
        };
        this.tail.next = newNode; // Link current tail to the new node
        this.tail = newNode; // Update the tail to the new node
        this.size++;
    }

    // Display Nodes
    display() {
        let current = this.head;
        for (let i = 1; i <= this.size; i++) {
            console.log(current.value);
            current = current.next;
        }
    }
    // Remove Nodes
    removeNode(node) {
        let remove = this.head;
        if (remove.value === node) {

        }
    }
}

let list = new List(2);
list.appendNode(3);
list.appendNode(100);
list.removeNode(1)
list.display(); // Output: 2, 100, 3 (circular list)
console.log(list);
