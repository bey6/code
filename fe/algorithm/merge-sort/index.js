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

function sort (startIdx, endIdx) {
  if (startIdx >= endIdx) return

  let splitIdx = Number.parseInt((endIdx - startIdx) / 2) + startIdx
  sort(startIdx, splitIdx)
  sort(splitIdx + 1, endIdx)

  rank(startIdx, splitIdx, endIdx)
}

function rank (startIdx, splitIdx, endIdx) {
  let temp = [], leftIdx = startIdx, rightIdx = splitIdx + 1

  while (leftIdx <= splitIdx && rightIdx <= endIdx)
    temp.push(arr[leftIdx] > arr[rightIdx] ? arr[rightIdx++] : arr[leftIdx++])

  while (leftIdx <= splitIdx) temp.push(arr[leftIdx++])

  while (rightIdx <= endIdx) temp.push(arr[rightIdx++])

  temp.forEach((item, idx) => arr[startIdx + idx] = item)
}

sort(0, arr.length - 1)