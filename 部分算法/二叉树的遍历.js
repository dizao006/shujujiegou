/**
 * 二叉树划分
 * 满二叉树
 * 所有的叶子节点都在最底层
 * 每个节点都有两个子节点（要么没有节点，要么有就得有两个节点）
 */
/**
 * 完全二叉树
 * 国内定义
 * 叶子节点都在最底层或者倒数第二层
 * 叶子节点都向左靠拢
 * 国际定义
 * 叶子节点都在最后一层或倒数第二层
 * 如果有叶子节点，就必须有两个叶子节点
 */



// 二叉树遍历
/**
 * 前序遍历 先跟次序遍历（根左右）   先打印当前的在打印左边的子树，再右边的子树
 * 中序遍历：（左中右）
 * 后序遍历：（左右中）
 */


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}
let root = new Node('root')
let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
root.right = b
root.left = a
a.left = c
a.right = d
b.left = e
b.right = f

//前序遍历

function start(root) {
    if (root == null) return
    console.log(root.value);
    start(root.left) //打印左边的子树
    start(root.right) //打印右边的子树而非节点
}
start(root)

function zhong(root) {
    if (root == null) return
    zhong(root.left) //打印左边的子树
    console.log(root.value);
    zhong(root.right) //打印右边的子树而非节点
}
zhong(root)

function hou(root) {
    if (root == null) return
    hou(root.left) //打印左边的子树
    hou(root.right) //打印右边的子树而非节点
    console.log(root.value);
}
hou(root)