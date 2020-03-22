# Hash Table（散列表）

散列表用的是数组支持按照下标随机访问数据的特性，所以散列表其实就是数组的一种扩展，由数组演化而来。

散列表的两个核心问题是**散列函数设计**和**散列冲突解决**

## 散列函数设计

散列函数的基本要求：

1. 散列函数计算得到的散列值是一个非负整数
2. 如果 Key1 = Key2，那 hash(key1) == hash(key2)
3. 如果 Key1 ≠ Key2，那 hash(key1) ≠ hash(key2)

## 散列冲突

散列冲突的解决方法：

1. 开放寻址法
2. 链表法

## 散列表的应用

Word 的单词拼写检查功能。