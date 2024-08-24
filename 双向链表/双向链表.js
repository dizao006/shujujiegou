//封装双向链表

function DoublyLinkedList() {
  this.head = null; //头指针
  this.tail = null; //尾指针
  this.length = 0;
  function Node(value) {
    //内部类结点
    this.value = value;
    this.prev = null; //前指针
    this.next = null; //后指针
  }
  /**
   *
   * @param {值} ele
   * append方法 插入一个元素
   * 要考虑到头指针和尾指针的指向
   */
  this.append = function (ele) {
    let node = new Node(ele);
    if (this.length === 0) {
      //没有元素的情况
      this.head = node;
      this.tail = node;
    }
    if (this.length > 0) {
      node.prev = this.tail; //新元素的头指针指向当前的尾指针的指向
      this.tail.next = node; //当前尾指针的指向的元素的下一个指向node
      this.tail = node; //然后再将尾指针指向新节点
    }
    this.length++;
  };
  this.toString = function () {
    return this.backwardString();
  };
  this.forwardString = function () {
    //向前遍历，从后往前
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.value + "=>";
      current = current.prev;
    }
    return result + "null";
  };
  this.backwardString = function () {
    //向后遍历，从前往后
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "=>";
      current = current.next;
    }
    return result + "null";
  };
  this.insert = function (position, ele) {
    //越界判断
    if (position < 0 || position > this.length) return false;
    let node = new Node(ele);
    if (this.length === 0) {
      //判断当没有元素的时候，即插入第一个元素
      this.head = node;
      this.tail = node;
    } else if (position === 0) {
      node.next = this.head; // 新节点指向原头部
      this.head.prev = node; // 原头部的前指针指向新节点
      this.head = node; // 更新头部为新节点
      if (this.length === 1) {
        // 当链表只有一个元素时，也需要更新尾部
        this.tail = node;
      }
    } else if (position === this.length) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      let current = this.head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
      node.next = current;
      node.prev = current.prev;
      current.prev.next = node;
      current.prev = node;
    }
    this.length++;
    return true;
  };
  this.get = function (position) {
    if (position < 0 || position >= this.length) return null;
    let current = null;
    let index = 0;
    if (this.length / 2 > position) {
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      index = this.length - 1;
      while (index-- > position) {
        current = current.prev;
      }
    }
    return current.value;
  };
  this.indexOf = function (ele) {
    if (this.length === 0) return -1;
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === ele) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  this.update = function (position, ele) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.value = ele;
    return true;
  };
  this.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length--;
    return current.value;
  };
  this.remove = function (ele) {
    const index = this.indexOf(ele);
    return this.removeAt(index);
  };
  this.isEmery = function () {
    return this.length == 0;
  };
  this.size = function () {
    return this.length;
  };
  this.reverse = function () {
    let current = this.head;
    let previous = null;
    let next = null;

    // 遍历链表，反转每个节点的next和prev指针
    while (current) {
      next = current.next; // 保存下一个节点的引用
      current.next = previous; // 将当前节点的next指针指向原来的prev节点
      current.prev = next; // 将当前节点的prev指针指向原来的next节点
      previous = current; // 将当前节点设置为新的prev节点
      current = next; // 将当前节点设置为下一个节点
    }

    // 反转完成后，原来的尾节点成为新的头节点，原来的头节点成为新的尾节点
    this.head = previous;
    this.tail = this.head;
  };
}

const list = new DoublyLinkedList();
list.append("abcd");
list.append("efgh");
list.append("lonb");

// console.log(list.backwardString());
list.insert(3, "aassssd");
// console.log(list.forwardString());
// console.log(list.get(3));
// console.log(list.indexOf("lonb"));
list.update(2, "123");
console.log(list.removeAt(list.length - 1));

console.log(list.backwardString());
