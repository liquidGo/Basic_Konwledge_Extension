### 尾递归/尾巴调用

- 非尾调用/尾递归（上一次递归函数并没有结束，依旧在等待结果，并未释放栈中的内存）：
  - <img src="../assets/image-20240319232916547.png" alt="image-20240319232916547" style="zoom: 25%;" />
- 尾调用（每一次调用都是新的函数，调用一次释放一次）：
- 尾递归（outer函数返回inner函数，尾调用会优先弹出outer函数，因为内外的return相同，在执行inner函数并且返回结果）：
  - <img src="../assets/image-20240319233011686.png" alt="image-20240319233011686" style="zoom:25%;" /><img src="../assets/image-20240319233631171.png" alt="image-20240319233631171" style="zoom:50%;" />