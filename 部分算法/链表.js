// function Node(value) {
//   this.value = value;
//   this.next = null;

// }
// let a = new Node(1);
// let b = new Node(2);
// let c = new Node(3);
// let d = new Node(4);
// let ns = new Node(null);
// a.next = b;
// b.next = c;
// c.next = d;
// ns.next = b;

// function NodeLink(root) {
//   let temp = root;
//   while (1) {
//     if (temp != null) {
//       console.log(temp.value);
//     } else {
//       break;
//     }
//     temp = temp.next;
//   }
// }
// NodeLink(a);

// //递归遍历

// function reverse(root) {
//   if (root.next.next == null) {
//     //代表当前节点为倒数第二个节点
//     root.next.next = root; //最后一个节点指向自己
//     return root.next;
//   } else {
//     let result = reverse(root.next);
//     root.next.next = root;
//     root.next = null;
//     return result;
//   }
// }
// let res = reverse(a);
// // console.log(res);
// NodeLink(res);

class LinkedList {
  length = 0;
  head = null;
  Node = class {
    data;
    next = null;
    constructor(data) {
      this.data = data;
    }
  };
  append(data) {
    //默认往链表最后添加
    let newNode = new this.Node(data);
    if (this.length == 0) {
      //当链表没有数据的时候，加入的第一个数据便是头部
      this.head = newNode;
    } else {
      //否则的话，不断循环，直至找到最后一个节点，最后一个节点如果没有下一个节点的话为null
      let currentHead = this.head;
      while (currentHead.next != null) {
        currentHead = currentHead.next;
      }
      currentHead.next = newNode; //将倒数第二个节点的next指向新添加的
    }
    this.length++; //长度增加
  }
}
const linkedList = new LinkedList();
// 测试 append 方法
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
console.log(linkedList);
