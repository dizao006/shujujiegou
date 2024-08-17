/**
 * 一组顶点V（Vertex）表示顶点的集合
 * 一组边E（Edge）表示边的集合
 *    边是顶点与顶点之间的连线
 *    边可以是有向的，也可以是无向的
 *    A----B 表示无向  B-->A表示有向
 */

function Graph() {
  //属性
  //顶点（数组）与边（对象）
  this.vertexs = []; //顶点
  this.edges = new Map();
  // 增加顶点与边
  this.addVertex = function (v) {
    if (!this.vertexs.includes(v)) {
      // 检查顶点是否已存在
      this.vertexs.push(v);
      this.edges.set(v, []);
    }
  };
  this.addEdge = function (v1, v2) {
    if (!this.edges.has(v1)) {
      this.addVertex(v1);
    }
    if (!this.edges.has(v2)) {
      this.addVertex(v2);
    }
    // 由于是无向图，所以需要添加两条边
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  };
  this.toString = function () {
    return this.edges;
  };
  //图的遍历
  /**
   * 广度优先搜索 BFS 从一个点开始，找到一个后返回原来的位置再找下一个，直到与这个点关联的所有点都被找到了
   *                  然后再从找到的第一个点开始找与他关联的 循环往复
   * 深度优先搜索 DFS
   *
   *  白 还未曾访问过
   *  灰 访问过，但从未探索过（探索过指与该点相关联的所有点都被访问过）
   *  黑 访问过，并且完全探索过
   */
  this.initColor = function () {
    let colors = [];
    for (let i = 0; i < this.vertexs.length; i++) {
      colors[this.vertexs[i]] = "white";
    }
    return colors;
  };
  //广度优先算法 BFS
  this.BFS = function (root) {
    // 初始化颜色，为每个顶点设置初始颜色为 "white"
    let color = this.initColor();
    // 创建一个队列，用于广度优先搜索
    let queue = new Queue();
    // 初始化结果字符串，用于存储遍历顺序的顶点
    let result = "";
    // 将起始顶点入队，并标记为已访问（灰色）
    queue.enqueue(root);
    color[root] = "gray";
    // 当队列不为空时，继续遍历图
    while (!queue.isEmpty()) {
      // 从队列中取出一个顶点
      let v = queue.dequeue();
      // 获取与当前顶点相邻的所有顶点列表
      let vList = this.edges.get(v);
      // 遍历当前顶点的所有邻居
      for (let i = 0; i < vList.length; i++) {
        // 获取一个邻居顶点
        let neighbor = vList[i];
        // 如果该邻居顶点尚未访问（颜色为 "white"）
        if (color[neighbor] === "white") {
          // 标记邻居顶点为已访问（灰色）
          color[neighbor] = "gray";
          // 将邻居顶点入队，以便后续访问
          queue.enqueue(neighbor);
        }
      }
      // 将当前顶点添加到结果字符串中
      result += v;
      // 标记当前顶点为已完全探索（黑色）
      color[v] = "black";
    }
    // 返回遍历顺序的结果字符串
    return result;
  };
  //深度优先搜索 DFS
  // 定义图的深度优先搜索（DFS）方法
  this.DFS = function (root, handler) {
    // 初始化所有顶点的颜色为 "white"
    let color = this.initColor();
    // 从根顶点开始执行深度优先搜索
    this.dfsList(root, color, handler);
  };

  // 递归辅助函数，用于执行深度优先搜索
  this.dfsList = function (v, color, handler) {
    // 将当前顶点颜色标记为 "gray"，表示正在访问
    color[v] = "gray";
    // 处理当前顶点，可以是一个回调函数，例如打印顶点或进行其他操作
    handler(v);
    // 获取当前顶点的相邻顶点列表
    let list = this.edges.get(v);
    // 遍历当前顶点的所有相邻顶点
    for (let i = 0; i < list.length; i++) {
      // 获取一个相邻顶点
      let e = list[i];
      // 如果相邻顶点尚未访问（颜色为 "white"）
      if (color[e] === "white") {
        // 递归调用 dfsList，继续深度优先搜索
        this.dfsList(e, color, handler);
      }
    }
    // 当前顶点及其所有相邻顶点都已访问完毕，标记为 "black"
    color[v] = "black";
  };
}
function Queue() {
  this.arr = [];
  this.enqueue = function (value) {
    this.arr.push(value);
  };
  this.dequeue = function () {
    return this.arr.shift();
  };
  this.front = function () {
    return this.arr[0];
  };
  this.isEmpty = function () {
    return this.arr.length === 0;
  };
  this.size = function () {
    return this.arr.length;
  };
  this.toString = function () {
    return this.arr.toString();
  };
}

let g = new Graph();

let myVertexts = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

myVertexts.forEach((e) => {
  g.addVertex(e);
});

//添加边
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("C", "D");
g.addEdge("C", "G");
g.addEdge("D", "G");
g.addEdge("D", "H");
g.addEdge("B", "E");
g.addEdge("B", "F");
g.addEdge("E", "I");

console.log(g.BFS(g.vertexs[0]));

let result = "";
g.DFS(g.vertexs[0], (e) => {
  result += e + " ";
});
console.log(result);
