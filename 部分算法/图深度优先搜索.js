function Node(value) {
  this.value = value;
  this.neighbors = [];
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");

a.neighbors.push(b);
a.neighbors.push(c);

b.neighbors.push(a);
b.neighbors.push(c);

c.neighbors.push(a);
c.neighbors.push(b);
c.neighbors.push(d);

d.neighbors.push(b);
d.neighbors.push(c);
d.neighbors.push(e);
e.neighbors.push(d);

function deepSearch(node, target, path) {
  if (node == null) return false;
  if (path.indexOf(node) > -1) return false;
  if (node.value == target) return true;
  path.push(node);
  let result = false;
  for (let i = 0; i < path.length; i++) {
    result |= deepSearch(node.neighbors[i], target, path);
  }
  return result ? true : false;
}

console.log(deepSearch(b, "d", []));
