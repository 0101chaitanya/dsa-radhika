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
        current = current?.next;
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
  insert(element, index = 0) {
    if (index > this.size) {
      return false;
    }
    const node = this.createNode(element);
    if (index === 0) {
      if (this.head) {
        node.next = this.head;
        this.head.prev = node;
      } else {
        this.tail = node;
      }
      this.head = node;
    } else if (index === this.size) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      const current = this.getNodeAt(index);
      const prev = current.prev;
      prev.next = node;
      current.prev = node;
      node.prev = prev;
      node.next = current;
    }
    this.size++;
    return true;
  }
  remove(index = 0) {
    if (index < 0 || index > this.size) return null;
    let removeNode = this.head;
    if (index === 0) {
      this.head = removeNode.next;
      if (this.size === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      removeNode = this.tail;
      this.tail = removeNode.prev;
      this.tail.next = null;
    } else {
      removeNode = this.getNodeAt(index);
      const previous = removeNode.prev;
      const next = removeNode.next;
      previous.next = next;
      next.prev = previous;
    }
  }
  reversed() {
    let current = this.head;
    let head = this.tail;

    this.tail = current;
    console.log('htc', this.head, this.tail, current);
    for (let i = 0; i < this.size; i++) {
      const { prev = null, next } = current;
      current.prev = next;
      current.next = prev;
      current = next;
    }
  }
}

const list = new doubleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.insert(0);
list.insert(23, list.size);
list.remove(0);
list.remove(2);
list.toString();
list.reversed();
list.toString();
