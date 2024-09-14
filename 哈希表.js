// function quicksort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     // 分区操作
//     let pivotIndex = partition(arr, left, right);

//     // 递归排序左右子数组
//     quicksort(arr, left, pivotIndex - 1);
//     quicksort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   let pivot = arr[right];
//   let i = left - 1;
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换元素
//     }
//   }
//   [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // 放置pivot
//   return i + 1;
// }

// console.log(quicksort([3, 6, 8, 10, 1, 2, 1]));

//写一个快速排序
