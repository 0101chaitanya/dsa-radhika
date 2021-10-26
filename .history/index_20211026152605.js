class LinkedList {
  size = 0;
  head = null;
  get isEmpty() {
    return size == 0;
  }
  createNode(element) {
    return {
      element , next : null
    }
  
  }
push(element){
  const node = this.createNode(element);
  if(this.head === null){
    this.head = node;
  }else{
    let current = this.head;
    while(current.next != null){
      current = current.next;
    }
    current.next = node;
  }
}
}