classs List = {
  constructor () {
  this.listSize = 0;
  this.position = 0;
  this.dataStore = [];
  this.toString = toString;
  this.append = append;
  this.remove = remove;
  this.length = length;
},
 length (){
  return this.listSize; 
 },
   append (element){
  this.dataStore.push(element);
  this.listSize++;
  },
  
  toString (){
    return this.dataStore.join(', ');
  }
}

const 