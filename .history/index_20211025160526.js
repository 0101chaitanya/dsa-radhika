class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head', null);
    this.length = 0;
  }
  find(item) {
    let currentNode = this.head;
    while (currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  length() {
    return this.length;
  }
  insert(newItem, index) {
    const newNode = new Node(newItem, null);

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    this.length++;
  }
  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const cities = new LinkedList();
console.log(cities.length, cities);
cities.insert('Mumbai', 0);

cities.display();
console.log(cities.length, cities);
