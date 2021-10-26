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
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = Node;
    }
    this.size++;
    return this.size;
  }
  toString() {
    if (!this.size) return '';
    let str = `${this.head.element}`;
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      current = current.next;
      str += `,${current.element}`;
      return str;
    }
  }
  print() {
    let arr = [];
    if (this.size) {
      let current = this.head;
      for (let i = 0; i < this.size; i++) {
        arr.push(current);
        current = current.next;
      }

      console.log(arr);
    }
  }
}

const list = new LinkedList();
list.push(12);
list.push(45);
