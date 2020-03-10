const arr = [23, 14, 0, 55, 2, 8, 43, 11, 9]

function quickSort (x, y) {
  if (x >= y) return

  let mid = x + (y - x) / 2
  quickSort(x, mid)
  quickSort(mid + 1, y)

  rank(x, y, mid)
}

function rank (startIdx, endIdx, midIdx) {
  let leftIdx = startidx, rightIdx = midIdx + 1

  while (leftIdx <= midIdx && rightIdx <= endIdx) {

  }
}