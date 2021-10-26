class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class doubleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  getLength() {
    return this.length;
  }
  append(element) {
    let newNode = new Node(element);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;

      this.length++;
    }
    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    this.tail.prev = currentTail;
    this.length++;
  }
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const newNode = new Node(element);
      let currentNode = this.head;
      let prevNode = null;
      let index = 0;

      if (position === 0) {
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
  }
}
