function BST() {
  this.root = null;

  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  this.insert = function (key) {
    const node = new Node(key);

    //判断根节点是否存在值
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  };
  //辅助插入操作
  this.insertNode = function (node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  //深度优先搜索包括前中后三种遍历方式
  //前序
  this.preOrderTraversal = function (root) {
    if (root == null) {
      return;
    }
    console.log(root.data + "->");
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  };
  //中序
  this.midOrderTraversal = function (root) {
    if (root == null) {
      return;
    }
    this.midOrderTraversal(root.left);
    console.log(root.data + "->");
    this.midOrderTraversal(root.right);
  };
  //后续
  this.afterOrderTraversal = function (root) {
    if (root == null) {
      return;
    }
    this.afterOrderTraversal(root.left);
    this.afterOrderTraversal(root.right);
    console.log(root.data + "->");
  };
  //广度优先搜索
  this.bfs = function (root = this.root) {
    if (root == null) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.data);
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
    }
    return result;
  };
  this.max = function () {
    let node = this.root;
    let key = null;
    while (node != null) {
      key = node.data;
      node = node.right;
    }
    return key;
  };
  this.min = function () {
    let node = this.root;
    let key = null;
    while (node != null) {
      key = node.data;
      node = node.left;
    }
    return key;
  };
  this.search = function (root, key) {
    let node = root ? root : this.root;
    if (node == null) {
      return false;
    }
    if (node.data == key) {
      return true;
    }
    if (key < node.data) {
      return this.search(node.left, key);
    } else {
      return this.search(node.right, key);
    }
  };
  this.delete = function (key) {
    if (key == null) {
      return false;
    }
    let current = this.root;
    let parent = null;
    let isLeftChild = null;

    while (current != null && current.data != key) {
      parent = current;
      if (key < parent.data) {
        isLeftChild = true;
      } else {
        isLeftChild = false;
      }
      current = isLeftChild ? current.left : current.right;
      if (current == null) {
        return false;
      }
    }
    //删除结点

    //1删除的结点没有子节点(叶子结点)
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      }
      isLeftChild ? (parent.left = null) : (parent.right = null);
    }
    // 删除的结点只有一个结点
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        current.left = parent.left;
      } else {
        current.right = parent.left;
      }
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        current.left = parent.right;
      } else {
        current.right = parent.right;
      }
    }

    //删除的结点有两个结点
    else {
      let successor = this.getSuccessor(current);
      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
  };
  this.getSuccessor = function (delNode) {
    let successor = delNode;
    let current = delNode.right;
    let successParent = delNode;

    while (current != null) {
      successParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor != delNode.right) {
      successParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  };
}

const bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
// console.log(JSON.stringify(bst.root, null, 8));

// // bst.afterOrderTraversal(bst.root);

// // console.log(bst.search(null, 25));
// bst.delete(13);
// console.log(JSON.stringify(bst.root, null, 8));
console.log("====================================");
console.log(bst.bfs());
console.log("====================================");
