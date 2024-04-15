## for/forEach/forMap比较

### flowchart

- 在通常情况下，`for`循环比`foreach`循环更快，因为`for`循环是使用索引来遍历[数据集合](https://so.csdn.net/so/search?q=数据集合&spm=1001.2101.3001.7020)，而`foreach`循环是直接遍历数据集合的元素。使用索引可以提供更快的访问速度，因为它可以直接访问每个元素的存储位置，而不需要查找元素的位置。
- forEach比forMap快，forMap需要处理返回数组。