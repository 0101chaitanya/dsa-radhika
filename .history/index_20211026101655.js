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
  }
}

const list = new LinkedList();
list.push(12);
list.push(45);
list.push(50);

//console.log('jey', list.get(2));
list.push(30);
list.insert(100, 3);

list.insert(200, 2);
list.insert(520, list.size - 1);
list.print();
console.log(list.size);

/* console.log(list.get(list.size - 1));
console.log('haha', list.toString());
list.print();
 */
