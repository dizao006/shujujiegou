// 使用列表的形式进行封装

/**
 * 时间复杂度计算
 *
 */
function ArrayList() {
  this.array = [];
  this.insert = function (item) {
    this.array.push(item);
  };
  this.toString = function () {
    return this.array.join("-");
  };

  //冒泡排序
  this.bubbleSort = function () {
    for (let i = this.array.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
        }
      }
    }
  };
  //选择排序
  this.selectSort = function () {
    for (let i = 0; i < this.array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
      }
      // 交换元素
      if (minIndex !== i) {
        [this.array[i], this.array[minIndex]] = [
          this.array[minIndex],
          this.array[i],
        ];
      }
    }
  };

  //插入排序
  this.insertSort = function () {
    for (let i = 1; i < this.array.length; i++) {
      let key = this.array[i];
      let j = i - 1;
      while (j >= 0 && this.array[j] > key) {
        this.array[j + 1] = this.array[j];
        j--;
      }
      this.array[j + 1] = key;
    }
  };
  //快速排序
  //分而治之的思想
  this.quickSort = function (arr = this.array) {
    if (arr.length == 0) {
      return arr;
    }
    let jizhun = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (i !== jizhun) {
        if (arr[i] < jizhun) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
    left = this.quickSort(left);
    right = this.quickSort(right);
    return [...left, jizhun, ...right];
  };
}

let list = new ArrayList();
list.insert(66);
list.insert(88);
list.insert(12);
list.insert(87);
list.insert(100);
list.insert(5);
list.insert(566);
list.insert(23);

// list.bubbleSort();
// list.selectSort();
console.log(list.quickSort());
console.log()
// list.insertSort2();
// console.log(list.toString());
