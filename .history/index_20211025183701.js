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
        } else {
          newNode.next = currentNode;
          currentNode.prev = newNode;
          this.head = newNode;
        }
      } else if (position === this.length) {
        currentNode = this.tail.prev;
        const newTail = this.tail;
        currentNode.next = newNode;
        newNode.prev = currentNode;
        newNode.next = newTail;
        newTail.prev = newNode;
        this.tail = newTail;
      }
    }
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let currentNode = this.head;
      let prevNode = null;
      if (position == 0) {
        this.head = currentNode.next;
        if (length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === length - 1) {
      }
    }
  }
}
