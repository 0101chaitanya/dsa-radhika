class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  set push(element) {
    this.dataStore.push(element);
    this.top++;
  }
  pop() {
    this.top--;
    return this.dataStore.pop();
  }
  get length() {
    return this.top;
  }
  get peak() {
    return this.dataStore[this.top - 1];
  }
  clear() {
    this.top = 0;
    this.dataStore = [];
  }
}

function mulBase(num, base) {
  let s = new Stack();

  do {
    s.push = num % base;

    num = Math.floor(num / base);
  } while (num > 0);
  let converted = 0;
  while (s.length > 0) {
    converted += s.pop();
    console.log(converted);
  }
  return converted;
}

let [newNum1, newNum2] = [mulBase(32, 8), mulBase(125, 8)];
console.log(newNum1, newNum2);
