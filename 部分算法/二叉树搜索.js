/**
 * 深度优先
 * 广度优先
 */
function Node(value) {
    this.value = value;
    this.left = null
    this.right = null
}
let root = new Node('root');
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
root.right = b
root.left = a
a.left = c
a.right = d
b.left = e
b.right = f

//深度搜索   与前序遍历的顺序是一样的
function deepSearch(root, target) {
    if (root == null) return false
    console.log(root.value);
    if (root.value == target) return true
    let left = deepSearch(root.left, target)
    let right = deepSearch(root.right, target)
    return left || right
}
// console.log(deepSearch(root, 'g'));


//广度优先搜索
function kuanSearch(rootList, target) {
    if (rootList == null || rootList.length == 0) return false
    let arr = [] //当前层所有节点的子节点都在arr，传入下一层时就可以遍历整个层级判断
    try {
        for (let i = 0; i < rootList.length; i++) {
            // console.log(rootList[i].value);
            if (rootList[i] != null && rootList[i].value == target) {
                return true
            } else {
                arr.push(rootList[i].left)
                arr.push(rootList[i].right)
            }
        }
        return kuanSearch(arr, target)
    } catch (error) {
        return false
    }

}
console.log(kuanSearch([root], 'g'));