import LinkedList from './singleLinkedList.mjs';

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
  insert(element, index = 0) {
    if(index > this.size) return false;
    const node = this.createNode(element);
    if(index == 0){
      if(this.head){
node.next = this.head;
this.head.prev = node;
      }else {
this.tail = node;
      }
      
    }
  }
}

const d_list = new DoubleLinkedList();
d_list.push(10);
d_list.push(20);
d_list.push(30);
d_list.push(40);

d_list.print();