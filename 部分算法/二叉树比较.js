/**
 * 
 * 遇到二叉树比较问题时，必须要确定左右两颗子树如果交换位置，还算不算同一颗二叉树
 */


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}
let root1 = new Node('root')
let a1 = new Node('a')
let b1 = new Node('b')
let c1 = new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
root1.right = b1
root1.left = a1
a1.left = c1
a1.right = d1
b1.left = e1
b1.right = f1


let root2 = new Node('root')
let a2 = new Node('a')
let b2 = new Node('b')
let c2 = new Node('c')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('f')
root2.right = a2
root2.left = b2
a2.left = c2
a2.right = d2
b2.left = e2
b2.right = f2
//左右不互换
function complateTree(root1, root2) {
    if (root1 == root2) return true
    if (root1 == null && root2 != null || root2 == null && root1 !== null) return false
    if (root1.value != root2.value) return false
    let leftBoolean = complateTree(root1.left, root2.left)
    let rightBoolean = complateTree(root1.right, root2.right)
    return leftBoolean && rightBoolean
}
// console.log(complateTree(root1, root2));

//左右互换仍然相等
function complateTree2(root1, root2) {
    if (root1 == root2) return true
    if (root1 == null && root2 != null || root2 == null && root1 !== null) return false
    if (root1.value != root2.value) return false
    let leftBoolean = complateTree(root1.left, root2.left)
    let rightBoolean = complateTree(root1.right, root2.right)
    let leftRight = complateTree(root1.left, root2.right)
    let rightLeft = complateTree(root1.right, root2.left)
    return leftBoolean && rightBoolean || leftRight && rightLeft
}
console.log(complateTree2(root1, root2));