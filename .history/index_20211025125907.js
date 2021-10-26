class List {
  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
  }
  get length() {
    return this.listSize;
  }
  append(element) {
    this.dataStore.push(element);
    this.listSize++;
  }

  get toString() {
    return this.dataStore.join(', ');
  }
  get clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    return this;
  }
}

const names = new List();
console.log(names);
names.append('chai');
names.append('chai-chai');
console.log(names.toString, names.length, names.clear);
