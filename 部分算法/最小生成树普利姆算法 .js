/**
 * 普利姆算法   加减法
 * 克鲁斯卡尔算法 加边法
 */

// 普利姆算法
let pointSet = [];
function Node(value) {
  this.value = value;
  this.naberhoud = [];
}
let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");
pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

let max = 100;
let distince = [
  [0, 4, 7, max, max],
  [4, 0, 8, 6, max],
  [7, 8, 0, 5, max],
  [max, 6, 5, 0, 7],
  [max, max, max, 7, 0],
];

function getIndex(str) {
  for (var i = 0; i < pointSet.length; i++) {
    if (str == pointSet[i].value) return i;
  }
  return -1;
}
/**
 * 根据当前已经有的节点来进行判断，获取到最短距离点
 * @param {*} pointSet
 * @param {*} distince
 * @param {*} nowSet
 */
function getMinDistance(pointSet, distince, nowSet) {
  let fromNode = null;
  let endNode = null;
  let minDis = max;

  //根据当前已有的这些点为起点，以此判断连接其他点的距离是多少
  for (let i = 0; i < nowSet.length; i++) {
    let nowPointIndex = getIndex(nowSet[i].value);
    for (let j = 0; j < distince[nowPointIndex].length; j++) {
      if (
        distince[nowPointIndex][j] < minDis &&
        !nowSet.includes(pointSet[j])
      ) {
        //不能是已经接入的点
        fromNode = nowSet[i];
        endNode = pointSet[j];
        minDis = distince[nowPointIndex][j];
      }
    }
  }
  fromNode.naberhoud.push(endNode);
  endNode.naberhoud.push(fromNode);
  return endNode;
}
function prim(pointSet, distince, start) {
  let nowSet = [start];
  while (nowSet.length < pointSet.length) {
    let minDistanceNode = getMinDistance(pointSet, distince, nowSet);
    nowSet.push(minDistanceNode);
  }
}

prim(pointSet, distince, a); // 使用起始节点a
for (let i = 0; i < pointSet.length; i++) {
  console.log(pointSet[i].value, pointSet[i].naberhoud);
}

//克鲁斯卡尔算法
