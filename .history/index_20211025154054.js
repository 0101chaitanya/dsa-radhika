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
}
