const arr = [3, 22, 51, 10, 89, 12, 43, 3, 521, 32, 66, 42, 73, 17, 45, 66, 0, 89, 99, 135]

/**
 * merge sort
 *
 * 假设要排序第 x 到 y 下标之间的元素，那么
 *
 * 递推公式：
 * mergeSort(x, y) = merge(mergeSort(x, (y - x) / 2 + 1), mergeSort((y - x) / 2 + 1, y))
 *
 * 终止条件：
 * x >= y (意思是不能再分了)
 */