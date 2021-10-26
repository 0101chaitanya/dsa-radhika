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
    if (!this.tail) {
      // array = [x , y, z] prepends at x and appends at y
      this.tail = newNode;
    }
    return this;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const list = new LinkedList();

list.prepend(2);
list.append(2);
console.log(list);
