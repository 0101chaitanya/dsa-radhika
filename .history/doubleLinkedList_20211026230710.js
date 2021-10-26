import LinkedList from './singleLinkedList.js';

class DoubleLinkedList extends LinkedList {
  tail = null;

  createNode(element) {
    return { element: element, next: null, prev: null };
  }
}
