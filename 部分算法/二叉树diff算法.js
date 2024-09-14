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
let g2 = new Node('g')
root2.right = b2
root2.left = a2
a2.left = c2
a2.right = d2
b2.left = e2
e2.left = g2

/**
 * @param arr {type:'新增'，origin:null,now:},{type:''修改，origin now} {type：'删除' origin now:null}
 */
var diffList = []
let id = 0

function diffTree(root1, root2, diffList) {
    if (root1 == root2) return diffList
    if (root1 == null && root2 !== null) {
        diffList.push({
            id: id++,
            type: `新增`,
            origin: null,
            now: root2
        })
    } else if (root1 !== null && root2 == null) {
        diffList.push({
            id: id++,
            type: '删除',
            origin: root1,
            now: null
        })
    } else if (root1.value != root2.value) {
        diffList.push({
            id: id++,
            type: '修改',
            origin: root1,
            now: root2
        })
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    } else {
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    }
}

diffTree(root1, root2, diffList)
console.log(diffList);