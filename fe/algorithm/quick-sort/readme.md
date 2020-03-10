# Quick Sort 快排

快排和归并排序非常相似，都是采用分治+递归的思路来解决问题

```js
递推公式：
quickSort(x, y) = quickSort(x, x + (y - x) / 2) + quickSort(x + (y - x) / 2 + 1, y)

终止条件：
x >= y
```

