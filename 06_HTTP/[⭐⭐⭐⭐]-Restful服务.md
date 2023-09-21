## Restful服务

### 相关点
- 什么是RestfulApi？

### 总结
#### 什么是Restful风格？

- Restful是一种接口设计风格，它的核心思想是：**使用URL定位资源，用HTTP描述操作**。

1. 资源采用复数形式
    - 为了避免歧义，资源名一般使用复数形式
    - 例如：`/users`、`/posts`
    - 例如：`/user/1`、`/post/1`
    - 例如：`/user/1/posts`、`/post/1/comments`
    - 例如：`/user/1/posts/1`、`/post/1/comments/1`
2. HTTP描述操作
    - HTTP方法：GET、POST、PUT、DELETE
    - HTTP状态码：200、201、204、400、401、403、404、405、500、503
3. 优点
    - 语义清晰
    - 易于理解
    - 易于实现
    - 易于维护