class LinkedList {
  size = 0;
  head = null;
  get isEmpty() {
    return this.size == 0;
  }
  createNode(element) {
    return { element: element, next: null };
  }
  push(element) {
    const Node = this.createNode(element);
    if (this.head === null) {
      this.head = Node;
    } else {
      let current = this.getNodeAt(this.size - 1);

      current.next = Node;
    }
    this.size++;
    return this.size;
  }
  toString() {
    if (!this.size) return '';
    let current = this.head;
    let str = [];
    /*  for (let i = 0; i < this.size; i++) {
      str += `,${current?.element}`;
      current = current.next;
    }
 */ str.push(current.element);

    while (current.next) {
      current = current.next;
      str.push(current?.element);
    }
    return str.join(',');
  }
  insert(element, index = 0) {
    if (index < 0 || index > this.size) return false;

    const node = this.createNode(element);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.getNodeAt(index - 1);

      node.next = previous.next;
      previous.next = node;
      //   console.log('node', node);
    }
    this.size += 1;
    return true;
  }
  print() {
    let arr = [];
    if (this.size) {
      let current = this.head;
      for (let i = 0; i < this.size; i++) {
        arr.push(current);
        current = current.next;
      }

      console.log('print', arr);
    }
  }
  getNodeAt(index) {
    if (index === undefined || index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  get(index) {
    const node = this.getNodeAt(index);
    return node ? node.element : null;
  }
  remove(index = 0) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedNode = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previous = this.getNodeAt(index - 1);
      removeNode = previous.next;
      previous.next = removedNode.next;
    }
    this.size--;
    return removedNode.element;
  }
  indexOf(element) {
    let current = this.head;
    if (current.element === element) {
      return 0;
    }
    for (let i = 0; i < this.size; i++) {
      if (current.element === element) {
        return i;
      }

      current = current.next;
    }
    return -1;
  }
  contains(element) {
    return this.indexOf(element) !== -1;
  }
}

class doubleLinkedList extends LinkedList {
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
    this.size += 1;
    return this.size;
  }
}

const list = new doubleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print();
