class Queue {
  constructor() {
    this.dataStore = [];
  }
  get length() {
    this.dataStore.length;
  }
  enqueue(patient) {
    if (this.isEmpty()) {
      this.dataStore.push(data);
    } else {
      let added = false;
      console.log(this.length);
      for (let i = 0; i < this.length(); i++) {
        if (patient.code > this.dataStore[i].code) {
          console.log('flints');
          this.dataStore.splice(i, 0, patient);
          added = true;
          break;
        }
      }
      if (!added) {
        this.dataStore.push(patient);
      }
    }
  }
  dequeue() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  rear() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    return [this.dataStore].join(',');
  }
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const newQueue = new Queue();
newQueue.enqueue(new Patient('ravi', 10));
newQueue.enqueue(new Patient('Ushant', 1));
newQueue.enqueue(new Patient('phasic', 5));
console.log(newQueue);
console.log(newQueue.toString(), newQueue.front(), newQueue.rear());
