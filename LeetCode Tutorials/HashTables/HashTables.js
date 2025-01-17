class HashTable {
  constructor(size = 7) {
    this.dataMap = Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}

let myHashTable = new HashTable();

console.log(myHashTable);
