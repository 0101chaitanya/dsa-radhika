class stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  push(element) {
    this.dataStore.push(element);
  }
  pop() {
    this.dataStore.pop();
  }
  peak() {
    return this.dataStore[this.dataStore.length - 1];
  }
}
