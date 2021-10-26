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
      str += `${current.element}`;
    }
    return str;
  }
}

const list = new LinkedList();
list.push(12);
list.push(34);
list.push(56);
list.push(78);
console.log(list.toString());
