function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
let root2 = new Node("root");
let a2 = new Node("a");
let b2 = new Node("b");
let c2 = new Node("c");
let d2 = new Node("d");
let e2 = new Node("e");
let f2 = new Node("f");
let g3 = new Node("g");
let h2 = new Node("h");
let j = new Node("j");
root2.right = a2;
root2.left = b2;
a2.left = c2;
a2.right = d2;
b2.left = e2;
b2.right = f2;
f2.left = g3;
g3.left = h2;
h2.left = j;

function getDeep(root) {
  //得到最深的有几层
  if (root == null) return 0;
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function isBlance(root) {
  if (root == null) return true;
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) <= 1) {
    return isBlance(root.left) && isBlance(root.right);
  } else {
    return false;
  }
}
console.log(isBlance(root2));
console.log(JSON.stringify(root2, null, 2));
