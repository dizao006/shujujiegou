function linkList() {
  this.length = 0;
  this.head = null;
  function Node(value) {
    this.value = value;
    this.next = null;
  }

  this.append = function (value) {
    let node = new Node(value);
    if (this.length == 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  };

  this.toString = function () {
    let result = "";
    let current = this.head;
    while (current != null) {
      result += current.value + "->";
      current = current.next;
    }
    return result;
  };

  this.insert = function (data, position) {
    if (position < 0 || position > this.length) return false;
    let node = new Node(data);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      let pre = null;
      while (index < position) {
        index++;
        pre = current;
        current = current.next;
      }
      node.next = current.next;
      pre.next = node;
    }
    this.length++;
    return true;
  };
  this.getPoition = function (position) {
    if (position < 0 || position > this.length) return false;
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.value;
  };
  this.indexOf = function (data) {
    if (this.length == 0) return -1;
    let current = this.head;
    let index = 0;
    if (current) {
      if (current.value == data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  this.remove = function (position) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    let pre = null;
    if (position == 0) {
      this.head = this.head.next;
    } else {
      while (index++ < position) {
        pre = current;
        current = current.next;
      }
      pre.next = current.next;
    }
    this.length--;
    return current.value;
  };
}

const list = new linkList();
list.append(10);
list.append(20);
list.append(10);
list.append(20);
console.log("====================================");
console.log(list.remove(3));
console.log("====================================");
console.log(list.toString());
console.log("====================================");
console.log("====================================");
