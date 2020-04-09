/**
 * merge sort
 *
 * 假设要排序第 x 到 y 下标之间的元素，那么
 *
 * 递推公式：
 * mergeSort(x, y) = merge(mergeSort(x, x + (y - x) / 2), mergeSort(x + (y - x) / 2 + 1, y))
 *
 * 终止条件：
 * x >= y (意思是不能再分了)
 */

const arr = [3, 22, 66, 0, 99, 89, 1]

function mergeSort (startIdx, endIdx) {
  if (startIdx >= endIdx) return

  let splitIdx = Number.parseInt((endIdx - startIdx) / 2) + startIdx
  mergeSort(startIdx, splitIdx)
  mergeSort(splitIdx + 1, endIdx)

  merge(startIdx, splitIdx, endIdx)
}

/**
 * 将 start - end 之间的元素有序合并
 * @param {number} startIdx 开始索引
 * @param {number} splitIdx 分割点索引
 * @param {number} endIdx 结束索引
 */
function merge (startIdx, splitIdx, endIdx) {
  let temp = [], leftIdx = startIdx, rightIdx = splitIdx + 1

  while (leftIdx <= splitIdx && rightIdx <= endIdx)
    temp.push(arr[leftIdx] > arr[rightIdx] ? arr[rightIdx++] : arr[leftIdx++])

  while (leftIdx <= splitIdx) temp.push(arr[leftIdx++])

  while (rightIdx <= endIdx) temp.push(arr[rightIdx++])

  temp.forEach((item, idx) => arr[startIdx + idx] = item)
}

mergeSort(0, arr.length - 1)