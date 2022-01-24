class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let addressWithinDataArray = this._hash(key);
    let dataPair = [key, value];
    if (!this.data[addressWithinDataArray]) {
      this.data[addressWithinDataArray] = [];
    }
    this.data[addressWithinDataArray].push(dataPair);
    return this.data;
  }

  get(key) {
    let addressWithinDataArray = this._hash(key);
    const currentBucket = this.data[addressWithinDataArray];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
    return null;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        const length = this.data[i].length;
        for (let j = 0; j < length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(8);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 100));
console.log(myHashTable.set('apples', 500));
console.log(myHashTable.set('banana', 400));
myHashTable.keys();
