class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        }
        this.tail = this.head;
        this.size = 1;
    }
    // Add nodes in List
    appendNode(nodedata) {
        let newNode = {
            value: nodedata,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    // Display all nodes
    display() {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new List(2);
list.appendNode(23);
list.appendNode(103);
console.log(list);
list.display();

