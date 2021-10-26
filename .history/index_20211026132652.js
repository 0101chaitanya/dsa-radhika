class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  this.size = 0;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    return this;
  }
  delete(value) {
    if (!this.head) {
      return null;
    }
 if()
      deletedNode = this.head;
      this.head = this.head.next;

      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode.value === value) {
          return;
        }
      }
      deletedNode = currentNode;
      prevNode.next = currentNode?.next;
    }
  }
}

const list = new LinkedList();

list.prepend(21);

list.append(43);
list.prepend(9);
list.append(92);
list.delete(92);
console.log(list);
