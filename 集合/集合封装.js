// 使用object进行集合的封装

function mySet() {
  this.items = {};
  this.add = function (val) {
    if (this.has(val)) return false;
    this.items[val] = val;
    return true;
  };
  this.has = function (val) {
    return this.items.hasOwnProperty(val);
  };
  this.remove = function (val) {
    if (!this.has(val)) return false;
    delete this.items[val];
    return true;
  };
  this.clear = function () {
    this.items = {};
  };
  this.size = function () {
    return Object.keys(this.items).length;
  };
  this.values = function () {
    return Object.values(this.items);
  };
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let j = 0; j < values.length; j++) {
      unionSet.add(values[j]);
    }
    return unionSet.values();
  };
  this.interSection = function (otherSet) {
    //交集
    let intersection = new mySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (otherSet.has(item)) {
        intersection.add(item);
      }
    }
    return intersection.values();
  };
  this.difference = function (otherSet) {
    let intersection = new mySet();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        intersection.add(item);
      }
    }
    return intersection.values();
  };
  this.subset = function (otherSet) {
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        return false;
      }
    }
    return true;
  };
}

let set1 = new mySet();
set1.add("1");
set1.add("2");
set1.add("3");
set1.add("5");
const set2 = new mySet();
set2.add("3");
set2.add("1");

console.log(set2.subset(set1));
