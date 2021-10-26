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
    if (head == null) {
      head = newNode;
      tail = newNode;
      this.length++;
    }
    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
    this.tail.prev = currentTail;
    this.length++;
  }
  insert(index, element) {
    if (index < 0 || index > this.length) {
    }
  }
}
