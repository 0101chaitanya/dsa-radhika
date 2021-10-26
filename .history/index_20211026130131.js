class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.rail = null;
  }
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (this.tail) {
      this.tail = newNode;
    }
  }
}
