const arr = [23, 14, 0, 55, 2, 8, 43, 11, 9]


function quickSort (x, y) {
  if (x >= y) return

  let mid = x + (y - x) / 2
  quickSort(x, mid)
  quickSort(mid + 1, y)

  rank(x, y, mid)
}

function rank (startIdx, endIdx, midIdx) {
  let switchIdx = startIdx, leftIdx = startIdx, p = arr[endIdx - 1]

  while (leftIdx < endIdx - 1) {
    if (arr[leftIdx] < p) {
      [arr[switchIdx], arr[leftIdx]] = [arr[leftIdx++], arr[switchIdx++]]
    } else {
      leftIdx++
    }
  }

  if (switchIdx < endIdx - 1) {
    let lastSmallIdx = switchIdx;
  }
  while (switchIdx < endIdx - 1) {
    if (switchIdx + 1 <= endIdx) {
      [arr[switchIdx], arr[switchIdx + 1]] = [arr[switchIdx], arr[switchIdx + 1]]
    } else {
      [arr[lastSmallIdx], arr[switchIdx]]
    }
  }
}

quickSort(0, arr.length - 1)