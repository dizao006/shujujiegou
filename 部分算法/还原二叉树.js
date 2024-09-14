/**
 * 前序中序 还原二叉树
 * 中序后续 还原二叉树
 */

let qian = ['root', 'a', 'c', 'd', 'b', 'e', 'f']
let zhong = ['c', 'a', 'd', 'root', 'e', 'b', 'f']
let hou = ['c', 'd', 'a', 'e', 'f', 'b', 'root']

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function huanyuan1(qian, zhong) {
    if (qian == null || qian.length == 0 || zhong == null || zhong.length == 0) return null
    let root = new Node(qian[0])
    let rootIndex = zhong.indexOf(root.value)
    let qleft = qian.slice(1, 1 + rootIndex) //前序遍历的left
    let qright = qian.slice(1 + rootIndex, qian.length) //前序遍历的right
    let zleft = zhong.slice(0, rootIndex) //中序遍历的left
    let zright = zhong.slice(rootIndex + 1, zhong.length) //中序遍历的right
    root.left = huanyuan1(qleft, zleft)
    root.right = huanyuan1(qright, zright)
    return root
}


function huanyuan2(zhong, hou) {
    if (hou == null || hou.length == 0 || zhong == null || zhong.length == 0) return null
    let len = hou.length
    let root = new Node(hou[len - 1])
    let rootIndex = zhong.indexOf(root.value)
    let zleft = zhong.slice(0, rootIndex)
    let zright = zhong.slice(rootIndex + 1, zhong.length)
    let hleft = hou.slice(0, rootIndex)
    let hright = hou.slice(rootIndex, hou.length - 1)
    root.left = huanyuan2(zleft, hleft)
    root.right = huanyuan2(zright, hright)
    return root
}
console.log(huanyuan2(zhong, hou));