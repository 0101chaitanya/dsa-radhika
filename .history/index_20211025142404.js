class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(data) {
    this.dataStore.push(data);
  }
  dequeue() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  rear() {
    return this.dataStore[this.dataStore.length - 1];
  }
}
