class Stack {
  constructor() {
    this.stackarray = [];
  }
  push(value) {
    this.stackArray.push(value);
    return this;
  }
  pop() {
    this.stackArray.pop();
    return this;
  }
  peek() {
    return this.stackArray[this.stackArray.length - 1];
  }
}
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
// myStack.peek();
myStack.pop();
myStack.peek();
