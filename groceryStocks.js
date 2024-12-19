// Constructor function
function GroceryStacks() {
    this.stack = [];
    this.maxSize = 5;
// Method to peek at the top item of the stack without removing it
    this.peek = function() {
        if (this.stack.length === 0) {
            return "Stack is empty";
        } else {
            return this.stack[this.stack.length - 1];
        }
    };
// Method to add an item to the stack
    this.push = function(item) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(item);
            console.log("Stack after push:", this.stack);
        } else {
            console.log("Stack is full!");
        }
    };
 // Method to remove the top item from the stack
    this.pop = function() {
        if (this.stack.length > 0) {
            let poppedItem = this.stack.pop();
            console.log("Stack after pop:", this.stack);
            return poppedItem;
        } else {
           // Print a message if the stack is empty and nothing can be popped
            console.log("Stack is empty!");
            return null;
        }
    };
}

// Example usage
const groceryStack = new GroceryStacks();
groceryStack.push("Strawberry");
groceryStack.push("Pizza");
groceryStack.push("Milktea");
groceryStack.push("Cheese");
groceryStack.push("Water");
console.log("Peek:", groceryStack.peek());
groceryStack.pop();
groceryStack.pop();
console.log("Peek:", groceryStack.peek());
