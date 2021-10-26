class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
    this.length = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head', null);
  }
  find(item) {
    let currentNode = this.head;
    while (currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insert(newItem, index) {
    const newNode = new Node(newItem, null);

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    this.length++;
  }
}
