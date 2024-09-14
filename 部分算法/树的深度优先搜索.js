function Node(value) {
  this.value = value;
  this.childs = [];
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.childs.push(c);

a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function deepSearch(node, target) {
  if (node === null) return false;
  if (node.value === target) return true; // 使用 === 进行比较
  for (let i = 0; i < node.childs.length; i++) {
    if (deepSearch(node.childs[i], target)) {
      return true; // 如果找到目标值，立即返回 true
    }
  }
  return false; // 如果没有找到，返回 false
}

console.log("====================================");
console.log(deepSearch(a, "e")); // 应该返回 false，因为没有值为 "x" 的节点
console.log("====================================");
