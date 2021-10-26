class LinkedList {
  size = 0;
  head = null;
  get isEmpty() {
    return size == 0;
  }
  createNode(element) {
    return {
      element,
      next: null,
    };
  }
  insert(element, index = 0) {
    if (index < 0 || index >= this.size) {
      return false;
    }
    const node = this.createNode(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;

      // to get the node after which we need to insert out node we do following
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
    }
    this.size++;
    return true;
  }
  push(element) {
    const node = this.createNode(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    return this.size;
  }
  toString() {
    if (!this.size) {
      return '';
    }
    let str = `${this.head.element}`;
    let current = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      current = current.next;
      str += `,${current.element}`;
    }
    return str;
  }
  print() {
    let arr = [];
    if (this.size) {
      let current = this.head;
      for (let i = 0; i < this.size; i++) {
        arr.push(current);
        current = current.next;
      }
    }
    console.log(arr);
  }
}

const list = new LinkedList();
list.push(12);
list.push(34);
list.push(56);
list.push(78);
console.log(list.toString());
list.print();
