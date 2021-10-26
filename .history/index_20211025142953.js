class Queue {
  constructor() {
    this.dataStore = [];
  }
  length() {
    this.dataStore.length;
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
  toString() {
    return [this.dataStore].join(',');
  }
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
