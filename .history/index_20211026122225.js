class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  head = new Node('head');

  find(item) {
    let current = this.head;
    while (current.element !== item) {
      current = current.next;
    }
  }
  insert(newELement, item) {
    const newNode = new Node(newELement);
    let current = this.find(item);
  }
}
