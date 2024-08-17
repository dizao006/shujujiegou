/**
 * 红黑树规则
 * 1 节点是红色或者黑色
 * 2 根节点是黑色
 * 3 个叶子节点都是黑色的空节点（度为0的节点）
 * 4 每个红色节点的两个子节点都是黑色的，不能出现两个红色的节点相连
 * 5 从任一节点到其他每个叶子的所有路径都包含相同数目的黑色节点
 * 6 新节点为红色
 */

// 插入分五种情况

/**
 * 1 插入的节点位于根节点，没有父节点,直接变为黑色
 * 2 父节点为黑色，不需要任何变化
 * 3 父红叔红爷黑，直接变换对应的颜色
 * 4 父红叔黑爷黑，将父变为黑，爷变为红，叔叔不动，（如果当前插入的节点是左子节点，那么右旋）
 * 5 父红叔黑爷黑，将父变为黑，爷变为红，叔叔不动，（如果当前插入的节点是右子节点，那么左旋）
 */
// 定义颜色常量
const RED = "RED";
const BLACK = "BLACK";

// 定义节点类
class Node {
  constructor(data) {
    this.data = data;
    this.color = RED; // 新节点默认为红色
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  // 设置父节点
  setParent(parent) {
    this.parent = parent;
  }

  // 获取叔叔节点
  getUncle() {
    if (!this.parent) return null;
    let grandparent = this.parent.parent;
    if (!grandparent) return null;
    if (this.parent === grandparent.left) {
      return grandparent.right;
    } else {
      return grandparent.left;
    }
  }

  // 左旋转
  rotateLeft() {
    let rightChild = this.right;
    this.right = rightChild.left;
    if (this.right) this.right.parent = this;
    rightChild.parent = this.parent;
    if (!this.parent) {
      // 根节点
      rightChild.color = BLACK;
    } else if (this === this.parent.left) {
      this.parent.left = rightChild;
    } else {
      this.parent.right = rightChild;
    }
    rightChild.left = this;
    this.parent = rightChild;
  }

  // 右旋转
  rotateRight() {
    let leftChild = this.left;
    this.left = leftChild.right;
    if (this.left) this.left.parent = this;
    leftChild.parent = this.parent;
    if (!this.parent) {
      // 根节点
      leftChild.color = BLACK;
    } else if (this === this.parent.right) {
      this.parent.right = leftChild;
    } else {
      this.parent.left = leftChild;
    }
    leftChild.right = this;
    this.parent = leftChild;
  }
}

// 插入节点后的调整
function fixInsert(node) {
  // 情况1: 插入的节点位于根节点
  if (!node.parent) {
    node.color = BLACK;
    return;
  }

  // 情况2: 父节点为黑色，不需要任何变化
  if (node.parent.color === BLACK) {
    return;
  }

  // 情况3: 父红叔红爷黑
  let uncle = node.getUncle();
  let grandparent = node.parent.parent;
  if (uncle && uncle.color === RED) {
    node.parent.color = BLACK;
    uncle.color = BLACK;
    grandparent.color = RED;
    fixInsert(grandparent); // 递归调整
    return;
  }

  // 情况4: 父红叔黑爷黑，且新节点是其父节点的右孩子，而父节点是祖父节点的左孩子
  // 或者新节点是其父节点的左孩子，而父节点是祖父节点的右孩子
  if (
    (node === node.parent.right && node.parent === grandparent.left) ||
    (node === node.parent.left && node.parent === grandparent.right)
  ) {
    if (node === node.parent.left) {
      node.parent.rotateRight();
      node = node.right; // 更新节点位置
    } else {
      node.parent.rotateLeft();
      node = node.left; // 更新节点位置
    }
  }

  // 情况5: 父红叔黑，且新节点是其父节点的左孩子，而父节点是祖父节点的左孩子
  // 或者新节点是其父节点的右孩子，而父节点是祖父节点的右孩子
  node.parent.color = BLACK;
  grandparent.color = RED;
  if (node === node.parent.left) {
    grandparent.rotateRight();
  } else {
    grandparent.rotateLeft();
  }
}

// 以下为测试代码，创建节点并模拟插入
let root = new Node(10);
root.color = BLACK; // 根节点为黑色
let node20 = new Node(20);
let node30 = new Node(30);

// 假设插入节点20
node20.setParent(root);
root.right = node20;
fixInsert(node20);

// 假设插入节点30
node30.setParent(node20);
node20.right = node30;
fixInsert(node30);
console.log(root);
