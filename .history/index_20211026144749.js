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
  insert(item,position){
if(position < 0 && position > this.size){

if(position === 0){
  let newNode = new Node(item);
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  }else {
    const currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
  }
}





}

  }

  }

const list = new LinkedList();

list.prepend(21);

list.append(43);
list.prepend(9);
list.append(92);
list.delete(9);
console.log(list);
