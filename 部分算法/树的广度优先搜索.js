function Node(value) {
  this.value = value;
  this.childs = [];
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.childs.push(c);

a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function bfs(roots, target) {
  if (roots.length === 0 || roots === null) return;
  let childs = [];
  for (let i = 0; i < roots.length; i++) {
    if (roots[i].value === target) {
      return true;
    } else {
      childs = childs.concat(roots[i].childs);
    }
    return bfs(childs, target);
  }
}

console.log("====================================");
console.log(bfs([a], "c"));
console.log("====================================");
