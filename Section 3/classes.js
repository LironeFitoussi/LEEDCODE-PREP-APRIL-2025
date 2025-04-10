class Cookie {
    constructor(color) {
        this.color = color;
    }

    // Getters and Setters
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

// Creating an instance of the Cookie class
// We are using the new keyword to create a new instance of the Cookie class.
// We pass the color parameter to the constructor.
let cookieOne = new Cookie("red");

let cookieTwo = new Cookie("blue");

// Accessing the properties of the cookieOne object
console.log(cookieOne.color); // red
console.log(cookieTwo.color); // blue
// Accessing the methods of the cookieOne object
console.log(cookieOne.getColor()); // red

// Changing the color of the cookieOne object
cookieOne.setColor("green");
console.log(cookieOne.getColor()); // green

// Linked List
// A linked list is a linear data structure where each element is a separate object.

class LinkedList {
    constructor(value) {
        // The head of the linked list
    }

    push(value) {
        // Add a new node to the end of the linked list
    }
    unshift(value) {
        // Add a new node to the beginning of the linked list
    }
    insert(index, value) {
        // Insert a new node at the specified index
    }
    remove(index) {
        // Remove a node at the specified index
    }
    pop() {
        // Remove the last node from the linked list
    }
    shift() {
        // Remove the first node from the linked list
    }
}