function Stack() {
  this.arr = [];
  this.push = function (value) {
    this.arr.push(value);
  };
  this.pop = function () {
    return this.arr.pop();
  };
  this.peek = function () {
    return this.arr[this.arr.length - 1];
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
  this.escStack = function () {
    let result = this.arr.slice(); //这里只考虑浅拷贝  拷贝第一层的数据，如果第一层数据存在引用类型，请替换为深拷贝
    while (!this.isEmpty()) {
      this.pop();
    }
    return result.reverse().join("");
  };
}
let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.arr);
// stack.pop();
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.arr);
// console.log(stack.toString());
// function moreTwo(numb) {
//   let stack = new Stack();
//   while (numb > 0) {
//     stack.push(numb % 2);
//     numb = Math.floor(numb / 2);
//   }
//   return stack.escStack();
// }

// console.log(moreTwo(10086));

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
// const queue = new Queue();

// // enqueue() 测试
// queue.enqueue("a");
// queue.enqueue("b");
// queue.enqueue("c");
// queue.enqueue("d");
// console.log(queue.arr); //--> ["a", "b", "c", "d"]

// // dequeue() 测试
// queue.dequeue();
// queue.dequeue();
// console.log(queue.arr); //--> ["c", "d"]

// // front() 测试
// console.log(queue.front()); //--> c

// // isEmpty() 测试
// console.log(queue.isEmpty()); //--> false

// // size() 测试
// console.log(queue.size()); //--> 2

// // toString() 测试
// console.log(queue.toString()); //--> c d

function Game(list, number) {
  let queue = new Queue();
  let deletes = []; //记录失败的人和失败的人的顺序
  for (let i = 0; i < list.length; i++) {
    //入队
    queue.enqueue(list[i]);
  }
  while (queue.size() > 1) {
    //当场上只剩下一个人的时候游戏结束
    for (let i = 0; i < number - 1; i++) {
      //将出队的人重新加入道队列中去
      queue.enqueue(queue.dequeue());
    }
    //一圈结束后，第number个人淘汰，并且将淘汰的人移除，并放入淘汰队列
    deletes.push(queue.dequeue()); //删除
  }
  //当场上只剩下最后一个人的时候，将胜利者和淘汰人员返回
  return [queue.front(), deletes];
}

const names = ["lily", "lucy", "tom", "tony", "jack"];
const result = Game(names, 4);
console.log(`击鼓传花，胜利者${result[0]}  失败者顺序${result[1]}`);
