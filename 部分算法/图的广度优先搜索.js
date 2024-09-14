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

function bfs(nodes, target, path) {
  if (nodes === null || nodes.length === 0) return false;
  let nextNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    if (path.indexOf(nodes[i]) > -1) continue;
    path.push(nodes[i]);
    if (nodes[i].value === target) return true;
    else nextNodes = nextNodes.concat(nodes[i].neighbors);
  }
  return bfs(nextNodes, target, path);
}

console.log("====================================");
console.log(bfs([c], "a", []));
console.log("====================================");
