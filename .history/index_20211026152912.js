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
  this.size++;
  return this.size;
}
toString(){
  if(!this.size){
    return "";
  }
  let str = `${this.head.element}`;
  let current = this.head;
 for(let i = 0; i < this.size; i++){
   current = current.next;
   str += `${current.element}`; 
 } 
 return str;
}
}

const list = new LinkList();

console.log(list.toString());