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
    this.dataStore.pop();
    this.top--;
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
    s.push(n % base);

    num = Math.floor(num / base);
    console.log(s, num);
  } while (num > 0);
  while (s.length > 0) {
    converted += s.pop();
    return converted;
  }
}
