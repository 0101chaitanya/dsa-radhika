class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      // array = [x , y, z] prepends at x and appends at y
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }
  delete(value) {
    if (!this.head) {
      return null;
    } else {
      /* if(this.head.value = value){

      this.head = this.head.next;
     }
 */
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode.value === value) {
          return;
        }
      }
      deletedNode = currentNode;
      prevNode.next = currentNode?.next;
    }
  }
}

const list = new LinkedList();

list.prepend(21);

list.append(43);
list.prepend(9);
list.append(92);
list.delete(92);
console.log(list);
