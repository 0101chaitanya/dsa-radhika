import LinkedList from './singleLinkedList.js';

class DoubleLinkedList extends LinkedList {
  tail = null;

  createNode(element) {
    return { element: element, next: null, prev: null };
  }
  push(element) {
    const node = this.createNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      const current = this.getNodeAt(this.size - 1);
      current.next = node;
      node.prev = current;
    }
    this.tail = node;
    this.size++;
    return this.size;
  }
}
