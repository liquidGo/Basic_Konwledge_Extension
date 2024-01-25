## git fetch和git pull的区别

### 问题
- 什么是git fetch和git pull？
- git fetch和git pull有什么区别？
- 还有其他类似的问题吗？
- git merge和git rebase有什么区别？

### 总结
- 什么是git fetch和git pull？区别？
  - git fetch：从远程仓库下载新分支与数据。
  - git pull：从远程仓库下载新分支与数据，并尝试合并到当前分支。

- git merge和git rebase有什么区别？
  - git merge：相当于直接把master和curren branch合并成一个新的分支，新增一条commit记录。
  - git rebase：相当于直接在master前面增加一个记录（变基）但是不会有commit记录。

- 两者的优点和缺点？
  > git merge增加了一条commit记录方便查看，但是会导致分支记录很多。    
  > git rebase不会增加commit记录，但是出了问题不好查找。