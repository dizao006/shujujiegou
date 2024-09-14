function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const node4 = new Node(4);
const node9 = new Node(9);
const node8 = new Node(8);
const node5 = new Node(5);
const node7 = new Node(7);
const node6 = new Node(6);

node9.left = node8;
node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node4;

function getDeep(root) {
  //得到最深的有几层
  if (root == null) return 0;
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function isBlance(root) {
  //检查是否为平衡二叉树
  if (root == null) return true;
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) <= 1) {
    return isBlance(root.left) && isBlance(root.right);
  } else {
    return false;
  }
}

function leftRoto(root) {
  //左旋转
  //1 找到新的根 根节点的右孩子
  let newRoot = root.right;
  //2找到变化的分支 右孩子的左孩子
  let changeNode = root.right.left;
  //3当前旋转节点的右孩子变为变化的分支
  root.right = changeNode;
  //4新根的左孩子为旋转节点
  newRoot.left = root;
  //返回新根节点
  return newRoot;
}

function rightRoto(root) {
  //右旋转
  //1 找到新的根
  let newRoot = root.left;
  //2找到变化的分支 右孩子的左孩子
  let changeNode = root.left.right;
  //3当前旋转节点的右孩子变为变化的分支
  root.left = changeNode;
  //4新根的左孩子为旋转节点
  newRoot.right = root;
  //返回新根节点
  return newRoot;
}

function change(root) {
  if (root == null) return null;
  if (isBlance(root)) return root;
  // 先递归调整左右子树
  if (root.left != null) root.left = change(root.left);
  if (root.right != null) root.right = change(root.right);

  // 计算左右子树的高度
  let leftDeep = getDeep(root.left);
  let rightDeep = getDeep(root.right);

  if (Math.abs(leftDeep - rightDeep) <= 1) {
    return root;
  } else if (leftDeep > rightDeep) {
    //如果出现需要双旋的情况时，即变化分支的深度大于没有变化分支的深度
    //则先进行逆向单旋
    let changeTreeDeep = getDeep(root.left.right);
    let noChangeTreeDeep = getDeep(root.left.left);
    if (changeTreeDeep > noChangeTreeDeep) {
      root.left = leftRoto(root.left);
    }
    let newRoot = rightRoto(root);
    newRoot.right = change(newRoot.right);
    newRoot = change(newRoot);
    return newRoot;
  } else {
    let noChangeTreeDeep = getDeep(root.right.right);
    let changeTreeDeep = getDeep(root.right.left);
    if (changeTreeDeep > noChangeTreeDeep) {
      root.left = leftRoto(root.right);
    }
    let newRoot = leftRoto(root);
    newRoot.left = change(newRoot.left);
    newRoot = change(newRoot);
    return newRoot;
  }
}

console.log(isBlance(node9));

const newNode = change(node9);
console.log(isBlance(newNode));
console.log(newNode);
