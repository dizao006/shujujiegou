//优先级队列

function priorityQueue() {
  function QueueElement(ele, priority) {
    this.ele = ele;
    this.priority = priority;
  }

  this.items = [];

  this.enqueue = function (ele, priority) {
    let queEle = new QueueElement(ele, priority);
    //判断队列是否为空
    if (this.items.length === 0 || queEle.priority < this.items[0].priority) {
      this.items.unshift(queEle);
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (queEle.priority < this.items[i].priority) {
          this.items.splice(i, 0, queEle);
          return;
        }
      }
      this.items.push(queEle);
    }
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

let qp = new priorityQueue();

qp.enqueue("abc", 10);
qp.enqueue("abc2", 20);
qp.enqueue("abc3", 30);
qp.enqueue("abc4", 15);
console.log("====================================");
console.log(qp.items);
console.log("====================================");
