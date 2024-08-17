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
    //弹栈并且记录弹出的顺序和数据
    let result = this.arr.slice(); //这里只考虑浅拷贝  拷贝第一层的数据，如果第一层数据存在引用类型，请替换为深拷贝
    while (!this.isEmpty()) {
      this.pop();
    }
    return result.reverse().join("");
  };
}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.arr); //[ 1, 2, 3 ]
// stack.pop();
// console.log(stack.peek()); //2
// console.log(stack.size()); //2
// console.log(stack.arr); //[ 1, 2 ]
// console.log(stack.toString()); //1,2

// 深拷贝方法;
// function deepClone(target) {
//   let restult;
//   if (typeof target === "object") {
//     if (Array.isArray(target)) {
//       restult = [];
//       for (const i in target) {
//         restult.push(deepClone(target[i]));
//       }
//     } else if (target == null) {
//       restult = null;
//     } else if (target.constructor === RegExp || target.constructor === Date) {
//       restult = target;
//     } else {
//       //说明是一个对象
//       restult = {};
//       for (const i in target) {
//         restult[i] = deepClone(target[i]);
//       }
//     }
//   } else {
//     restult = target;
//   }
//   return restult;
// }

//十进制转二进制
const toTwo = function (ten) {
  let stack = new Stack();

  while (ten > 0) {
    stack.push(ten % 2);
    ten = Math.floor(ten / 2);
  }

  return stack.escStack();
};
console.log(toTwo(1000));
