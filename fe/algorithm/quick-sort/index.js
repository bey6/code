/**
 * quick sort 排序的方式是自上层到下层的，与 merge sort 截然相反
 */

const datasource = [23, 14, 0, 55, 2, 8, 43, 11, 9]

function quickSort (arr, x, y) {
  if (x > y) return

  let pivotIdx = partition(arr, x, y)

  quickSort(arr, x, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, y)
}

function partition (arr, x, y) {
  let pivot = arr[y], i = x, k = x

  while (k < y) {
    if (arr[k] < pivot) {
      [arr[k], arr[i]] = [arr[i], arr[k]]
      console.log(...arr.slice(x, y + 1));
      i++
    }
    k++
  }

  // // #region 不稳定排序
  // [arr[y], arr[i]] = [arr[i], arr[y]]
  // // #endregion

  // #region 稳定排序
  while (i < k) {
    [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
    k--
    console.log(...arr.slice(x, y + 1));
  }
  // #endregion

  return i
}

quickSort(datasource, 0, datasource.length - 1)
console.log();
console.log('sorted result');
console.log(...datasource);