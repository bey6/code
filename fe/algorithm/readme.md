# algorithm

归并排序和快速排序。这两种排序算法适合大规模的数据排序

## Merge Sort 归并排序

归并排序使用的就是分治思想，分治是一种解决问题的处理思想，递归是一种编程技巧。

归并排序不是原地排序，归并排序可以是稳定排序，归并排序的时间复杂度是 O(nlogn)。

```js
递推公式：
merge_sort(p…r) = merge(merge_sort(p…q), merge_sort(q+1…r))

终止条件：
p >= r 不用再继续分解
```

归并排序的解题思路为，先分到无法在分，然后两两合并（合并时保持有序）最终得到结果。


## Quick Sort 快速排序

qs 也是使用的分治法的思想。

递推公式：
```js
递推公式：
merge_sort(p…r) = merge(merge_sort(p…q), merge_sort(q+1…r))

终止条件：
p >= r 不用再继续分解
```