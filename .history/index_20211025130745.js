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
  get peak() {
    return this.dataStore[this.dataStore.length - 1];
  }
}

const myStack = new Stack();

myStack.push('hello');
myStack.push('world');
console.log(myStack.peak);
