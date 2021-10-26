class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  set push(element) {
    this.dataStore.push(element);
    this.top++;
  }
  pop() {
    this.dataStore.pop();
    this.top--;
  }
  get length() {
    return this.top;
  }
  get peak() {
    return this.dataStore[this.top - 1];
  }
  clear() {
    this.top = 0;
    this.dataStore = [];
  }
}

const myStack = new Stack();

myStack.push = 'hello';
myStack.push = 'world';
console.log(myStack.length);
console.log(myStack.peak);
myStack.pop();
console.log(myStack.peak);
myStack.clear();
console.log(myStack.peak);
