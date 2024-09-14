function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function addNode(root, node) {
  if (root === null) return;
  //   if (root.value == node) return;  //判断是否有重复的，如果需要去重则开启，不需要则注释掉
  if (node < root.value) {
    if (root.left == null) root.left = new Node(node);
    else addNode(root.left, node);
  } else {
    if (root.right == null)
      root.right = new Node(node); //如果右侧为空，则创建结点
    else addNode(root.right, node); //如果不为空则代表右侧已经存在结点，则递归添加进去
  }
}
function createSerachTree(arr) {
  if (arr == null || arr.length == 0) return;
  const root = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    addNode(root, arr[i]);
  }
  return root;
}
arr = [5, 2, 3, 8, 1, 6, 0, 1, 3, 5, 10, 22, 3, 25, 15, 36];
const result = createSerachTree(arr);
console.log("====================================");
console.log(JSON.stringify(result, null, 2));
console.log("====================================");
// function getDeep(root) {
//   //得到最深的有几层
//   if (root == null) return 0;
//   let leftDeep = getDeep(root.left);
//   let rightDeep = getDeep(root.right);
//   return Math.max(leftDeep, rightDeep) + 1;
// }

// function isWanquan(root) {
//   if (root == null) return true;
//   let leftDeep = getDeep(root.left);
//   let rightDeep = getDeep(root.right);
//   if (Math.abs(leftDeep - rightDeep) <= 1) {
//     return isWanquan(root.left) && isWanquan(root.right);
//   } else {
//     return false;
//   }
// }
// console.log(isWanquan(result));

function serchTree(root, target) {
  if (root == null || target == null) return;
  if (root.value === target) return true;
  if (root.value > target) {
    return serchTree(root.left, target);
  } else {
    return serchTree(root.right, target);
  }
}

console.log("====================================");
console.log(serchTree(result, 5));
console.log("====================================");
