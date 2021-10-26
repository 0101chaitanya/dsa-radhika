class List {
  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
    /*     this.toString = toString;
    this.append = append;
    this.remove = remove;
    this.length = length;
 */
  }
  get length() {
    return this.listSize;
  }
  get append(element) {
    this.dataStore.push(element);
    this.listSize++;
  }

 get toString() {
    return this.dataStore.join(', ');
  }
}

const names = new List();
console.log(names);
names.append('chai');
names.append('chai-chai');
console.log(names.toString ,names.length);
