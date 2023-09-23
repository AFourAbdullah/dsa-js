class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    //this function is for converting a string key in numeric index within range of table size or this.size
    //this is very simple hashing function which may cause overriding of values for same keys and it is called collision in hash table

    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }
    return total % this.size; //if size is 50 then it will ensure that index is in range of 0 to 49 both inclusive
  }
  set(key, value) {
    //this method will first hash the key and then at hashedkey index will store the value
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const samKeyItem = bucket.find((item) => item[0] == key);
      if (samKeyItem) {
        samKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    //this method will first hash the key and then at hashedkey index will get the value
    const index = this.hash(key);
    // return this.table[index] ? this.table[index] : "nothing at that key";
    const bucket = this.table[index];
    if (bucket) {
      const samKeyItem = bucket.find((item) => item[0] == key);
      if (samKeyItem) {
        return samKeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const samKeyItem = bucket.find((item) => item[0] == key);
      if (samKeyItem) {
        bucket.splice(bucket.indexOf(samKeyItem), 1);
      }
    }
  }
  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(`value at index:${index} is ${this.table[index]}`);
      }
    }
  }
}
const table = new HashTable(50);
table.set("myFirst", "firsst item");
table.set("mysecond", "second item");
table.set("mythird", "third item");
table.set("myFourth", "fourth item");
table.set("myoFurth", "ofurth item");
table.display();
console.log(table.get("mysecond"));
console.log(table.get("mythird"));
console.log(typeof table[0]);
table.remove("myFourth");
table.display();
//time complexity is liner for every ops O(n)
