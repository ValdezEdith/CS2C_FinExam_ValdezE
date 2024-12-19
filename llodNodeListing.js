// Class representing a single node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Class representing the linked list itself
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
// How to add a new node containing information to the list's end
    append(data) {
        const newNode = new Node(data);// Use the provided data to create a new node
      // The new node will be the head if the list is empty
        if (!this.head) {
            this.head = newNode;
        } else {
          
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
          // Set the next pointer of the last node to the new node
            current.next = newNode;
        }
       // Increment the size of the linked list
        this.size++;
       // Print the current state of the linked list
        this.print(); // Print after each append
    }

    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " ";
            current = current.next;
        }
        console.log("Linked List:", output);
    }
}


// Example usage
const myList = new LinkedList();
myList.append("Data Structures - Array");
myList.append("Variable Type - Integer");
myList.append("Sorting Algorithm - Bubble Sort");
