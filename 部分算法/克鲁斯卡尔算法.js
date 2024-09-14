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

function canLink(result, tempStart, tempEnd) {
  let beginIn = null;
  let endIn = null;
  for (let i = 0; i < result.length; i++) {
    if (result[i].indexOf(tempStart) > -1) {
      beginIn = result[i];
    }
    if (result[i].indexOf(tempEnd) > -1) {
      endIn = result[i];
    }
  }
  // 两个点都是新的点  都不在任何部  可以连接，产生新的部落
  //如果start在A部落，end么有部落 ，相当于a部落扩张一个村庄
  //如果end在A部落，start没有部落，则相当于a扩张村庄
  //如果start在a部落，end在b部落，则相当于ab合并
  //如果start和end在同一个部落，则无法连接
  if (beginIn != null && endIn != null && beginIn == endIn) {
    return false;
  }
  return true;
}
function link(result, tempStart, tempEnd) {
  let beginIn = null;
  let endIn = null;
  for (let i = 0; i < result.length; i++) {
    if (result[i].indexOf(tempStart) > -1) {
      beginIn = result[i];
    }
    if (result[i].indexOf(tempEnd) > -1) {
      endIn = result[i];
    }
  }
  // 两个点都是新的点  都不在任何部  可以连接，产生新的部落
  if (beginIn == null && endIn == null) {
    let newArr = [];
    newArr.push(tempStart);
    newArr.push(tempEnd);
    result.push(newArr);
  }
  //如果start在A部落，end么有部落 ，相当于a部落扩张一个村庄
  else if (beginIn == null && endIn != null) {
    endIn.push(tempStart);
  } else if (beginIn != null && endIn == null) {
    //如果end在A部落，start没有部落，则相当于a扩张村庄
    beginIn.push(tempEnd);
  } else if (beginIn != null && endIn != null && beginIn != endIn) {
    //如果start在a部落，end在b部落，则相当于ab合并
    let Allin = beginIn.concat(endIn);
    let needRemove = result.indexOf(endIn);
    result.splice(needRemove, 1);
    needRemove = result.indexOf(beginIn);
    result.splice(needRemove, 1);
    result.push(Allin);
  }
  tempStart.naberhoud.push(tempEnd);
  tempEnd.naberhoud.push(tempStart);
}
/**
 * @param pointSet 点集
 * @param distince 距离
 */
function kruskal(pointSet, distince) {
  let result = []; //二维数组 代表有多少个部落【[a,b],[b,c]】
  while (true) {
    let minDis = max; //初始化最小距离
    let start = null; //起始位置
    let end = null; //终点

    for (let i = 0; i < distince.length; i++) {
      for (let j = 0; j < distince[i].length; j++) {
        let tempStart = pointSet[i];
        let tempEnd = pointSet[j];
        if (
          i != j &&
          distince[i][j] < minDis &&
          canLink(result, tempStart, tempEnd)
        ) {
          minDis = distince[i][j];
          start = tempStart;
          end = tempEnd;
        }
      }
    }
    link(result, start, end); // 将这几个点连接起来
    if (result.length == 1 && result[0].length == pointSet.length) {
      //只存在一个部落，且数量和总和相等
      break;
    }
  }
}
kruskal(pointSet, distince);
console.log(pointSet);
for (let i = 0; i < pointSet.length; i++) {
  console.log(pointSet[i], pointSet[i].naberhoud);
}
