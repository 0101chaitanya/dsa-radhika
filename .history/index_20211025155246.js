class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
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
    let previousIndex = 0;

    if (index > length) {
      return false;
    }
    if (index === 0) {
      newNode.next = currentNode;
      this.head = newNode;
    }
  }
}
