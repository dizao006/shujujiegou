// class PriorityQueue {
//   constructor() {
//     this.queue = [];
//   }

//   // 添加元素的方法，element 为添加的元素，priority 为优先级，值越小优先级越高
//   enqueue(element, priority) {
//     let queueElement = { element, priority };
//     let contain = false;

//     for (let i = 0; i < this.queue.length; i++) {
//       if (this.queue[i].priority > queueElement.priority) {
//         // 在当前队列中找到第一个优先级低于新元素的元素
//         // 插入新元素到该位置，保持队列的优先级顺序
//         this.queue.splice(i, 0, queueElement);
//         contain = true;
//         break;
//       }
//     }

//     // 如果队列中没有元素的优先级低于新元素，将新元素添加到队列末尾
//     if (!contain) {
//       this.queue.push(queueElement);
//     }
//   }

//   // 删除队列中优先级最高的元素
//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.queue.shift();
//   }

//   // 查看队列中优先级最高的元素
//   front() {
//     if (this.isEmpty()) {
//       return "No elements in Queue";
//     }
//     return this.queue[0];
//   }

//   // 检查队列是否为空
//   isEmpty() {
//     return this.queue.length === 0;
//   }

//   // 清空队列
//   clear() {
//     this.queue = [];
//   }

//   // 打印队列元素
//   printQueue() {
//     let str = "";
//     for (let i = 0; i < this.queue.length; i++) {
//       str += this.queue[i].element + " ";
//     }
//     return str;
//   }
// }

// 使用示例
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("task1", 1);
// priorityQueue.enqueue("task2", 2);
// priorityQueue.enqueue("task3", 3);

// console.log(priorityQueue.printQueue()); // 应输出: task1 task2 task3

// priorityQueue.enqueue("task4", 1.5);

// console.log(priorityQueue.printQueue()); // 应输出: task1 task4 task2 task3

// console.log("Dequeue: ", priorityQueue.dequeue()); // 应输出: Dequeue:  { element: 'task1', priority: 1 }
// console.log(priorityQueue.printQueue()); // 应输出: task4 task2 task3
function PriorityQueue() {
  this.queue = [];
  this.addEqeue = function (element, priority) {
    let obj = { element, priority };
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > obj.priority) {
        this.queue.splice(i, 0, obj);
        return;
      }
    }
    this.queue.push(obj);
  };
  //   // 删除队列中优先级最高的元素
  this.dequeue = function () {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.queue.shift();
  };

  //   // 查看队列中优先级最高的元素
  this.front = function () {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.queue[0];
  };

  //   // 检查队列是否为空
  this.isEmpty = function () {
    return this.queue.length === 0;
  };

  //   // 清空队列
  this.clear = function () {
    this.queue = [];
  };

  //   // 打印队列元素
  this.printQueue = function () {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i].element + " ";
    }
    return str;
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.addEqeue("task1", 1);
priorityQueue.addEqeue("task2", 2);
priorityQueue.addEqeue("task3", 3);

console.log(priorityQueue.printQueue()); // 应输出: task1 task2 task3

priorityQueue.addEqeue("task4", 1.5);

console.log(priorityQueue.printQueue()); // 应输出: task1 task4 task2 task3

console.log("Dequeue: ", priorityQueue.dequeue()); // 应输出: Dequeue:  { element: 'task1', priority: 1 }
console.log(priorityQueue.printQueue()); // 应输出: task4 task2 task3
