## GIT操作

### git工作流程
1. 本地新建分支：git branch <branch-name>  
2. 同步本地分支：git push origin -u <branch-name>
3. 添加到暂存区：git add .
4. 推送本地仓库：git commit -m 'feat:xxx'
5. 推送远程仓库：git push 
6. 切换主要分支：git checkout master
7. 合并开发分支：git merge/rebase <branch-name>
8. 删除本地分支：git branch -d <branch-name>
9. 删除远程分支：git push origin --delete <branch-name>

### git stash
工作需要暂存当前分支上的工作进度而切换到其他分支进行开发，此时就需要用到git stash命令
1. 暂存当前分支：git stash save <stash-name>
2. 查看暂存列表：git stash list
3. 两种恢复方式
    一、恢复暂存同时删除：git stash pop <stash-name>
    二、恢复暂收手动删除：  
        git stash apply <stash-name>
        git stash drop <stash-name>