let arr = [1, 3, 2, 6, 4, 9, 8]

// 排序的本质是交换和比较


//排序
// function getMin(arr) {
//     let min = Math.min(...arr)
//     let index = arr.indexOf(min)
//     let result = arr[index]
//     arr[index] = null
//     return result
// }

// function sort(arr) {
//     let res = []
//     const len = arr.length
//     for (let i = 0; i < len; i++) {
//         let min = getMin(arr)
//         arr = arr.filter((e) => {
//             return e != null
//         })
//         res.push(min)
//     }
//     return res
// }
// console.log(sort(arr));

/**
 * 任何排序算法中 比较与交换算法都不需要变，变得是排序算法
 * @param {Function} compare 比较算法
 * @param {Function} exchange 交换算法
 */
function compare(a, b) {
    return a < b ? true : false
}

function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}


// 冒泡排序
/**
 * 
 * @param {Function} maopao 冒泡排序每一轮都进行两两比较，将最小的或者最大的放到最前面或者最后面，每轮循环减去已经循环的次数，因为每一轮结束后不需要再比较最后或者开头一位
 * 适合用于部分数据是有序的，只有少部分是无序的
 */
// function maopao(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (compare(arr[j], arr[j + 1])) { //比较
//                 exchange(arr, j, j + 1)
//             }
//         }
//     }
//     return arr
// }
// console.log(maopao(arr));

// 选择排序
/**
 * 
 * @param {Function} selectSort 选择排序，每一轮都会找到最大或者最小的那个数放到最后面，
 * 适用于大部分数据都是无需的，数据越混乱，快速排序速度越快
 */
// function selectSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let maxIndex = 0
//         for (let j = 0; j < arr.length - i; j++) {
//             if (compare(arr[maxIndex], arr[j])) {
//                 maxIndex = j
//             }
//             exchange(arr, maxIndex, arr.length - i - 1)
//         }
//     }
//     return arr
// }

// console.log(selectSort(arr));

// 快速排序

// function quicklySort(arr) {
//     if (arr.length == 0) {
//         return arr
//     }
//     let zhong = arr[0]
//     let left = []
//     let right = []
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > zhong) right.push(arr[i])
//         else left.push(arr[i])
//     }
//     left = quicklySort(left)
//     right = quicklySort(right)
//     return [...left, zhong, ...right]
// }
// console.time()
// quicklySort(arr);
// console.timeEnd()

// 快速排序标准版  速度更快
// function quickSort2(arr, start, end) {
//     if (start >= end - 1) {
//         return
//     }
//     let left = start //左指针
//     let right = end //右指针
//     do {
//         do {
//             left++
//         } while (left < right && arr[left] < arr[start]);
//         do {
//             right--
//         } while (right > left && arr[right] > arr[start]);
//         if (left < right) {
//             exchange(arr, left, right);
//         }
//     } while (left < right);
//     let swapPoint = left == right ? right - 1 : right
//     exchange(arr, start, swapPoint)
//     quickSort2(arr, start, swapPoint)
//     quickSort2(arr, swapPoint + 1, end)
// }

// function quickSort(arr) {
//     quickSort2(arr, 0, arr.length)
// }
// console.time()
// quickSort(arr)
// console.timeEnd()
// console.log();