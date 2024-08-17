//链表的封装

function LinkedList() {
  this.head = null;
  this.length = 0;
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.append = function (data) {
    const node = new Node(data);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  };
  this.toString = function () {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + "->";
      current = current.next;
    }
    return result + "null";
  };
  this.insert = function (data, position) {
    // 对poisition进行位置判断
    if (position < 0 || position > this.length) return false;
    let node = new Node(data);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null; // 用于引用前一个节点
      while (index++ < position) {
        previous = current; // 更新前一个节点
        current = current.next;
      }
      node.next = current.next;
      previous.next = node;
    }
    this.length++;
    return true;
  };
  this.getPoition = function (position) {
    if (position < 0 || position >= this.length) return false;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  };
  this.indexOf = function (data) {
    if (this.length === 0) return -1;
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  this.update = function (position, element) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    current.data = element;
    return true;
  };
  this.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;
  };
  this.remove = function (ele) {
    const index = this.indexOf(ele);
    return this.removeAt(index);
  };
  this.isEmpty = function () {
    return this.length === 0 ? false : true;
  };
  this.size = function () {
    return this.length;
  };
  this.reverse = function () {
    let previous = null; // 初始化前一个节点为null
    let current = this.head; // 当前节点从头部开始
    let next = null; // 临时节点用于存储下一个节点

    // 遍历链表，直到当前节点为null
    while (current !== null) {
      next = current.next; // 存储下一个节点
      current.next = previous; // 反转当前节点的指针
      previous = current; // 前一个节点移动到当前节点
      current = next; // 当前节点移动到下一个节点
    }
    // 最后，将头节点设置为原来的尾节点，即previous
    this.head = previous;
  };
}

const list = new LinkedList();

list.append("abcd");
list.append("efgh");
list.append("lonb");
console.log(list.toString());
list.insert("asdass", 0);
console.log(list.toString());
console.log(list.getPoition(2));
console.log("====================================");
console.log(list.indexOf("efgh"));
console.log("====================================");
console.log(list.update(0, "000"));
console.log("====================================");
console.log(list.removeAt(3));
console.log("====================================");
console.log(list.toString());
console.log("====================================");
list.reverse();
console.log(list.toString());
