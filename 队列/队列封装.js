function Queue() {
  this.arr = [];
  this.enqueue = function (value) {
    this.arr.push(value);
  };
  this.dequeue = function () {
    return this.arr.shift();
  };
  this.front = function () {
    return this.arr[0];
  };
  this.isEmpty = function () {
    return this.arr.length === 0;
  };
  this.size = function () {
    return this.arr.length;
  };
  this.toString = function () {
    return this.arr.toString();
  };
}
const queue = new Queue();

// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.arr); // ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.arr); //["c", "d"]

// front() 测试
console.log(queue.front()); // c

// isEmpty() 测试
console.log(queue.isEmpty()); //false

// size() 测试
console.log(queue.size()); //2

// toString() 测试
console.log(queue.toString()); // c d
