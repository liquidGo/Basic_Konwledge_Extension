## URL 相关 API

### 灵感

- URL 相关的 API 有哪些?
- 解决了哪些问题?
- 如何使用他们?

### 总结

- 相关的常用 API 有哪些?
  - URL: 用于解析和构建 标准的 BASE URL
  - 解决问题: 解决拼接 URL 无意加入多余的空格或者参数不正确的问题
  - 使用方法:
    ```
    const url=new URL('https://www.baidu.com')
    url.searchParams.set('name', 'zhangsan')
    url.searchParams.set('age', 18)
    console.log(url.href) // https://www.baidu.com/?name=zhangsan&age=18
    ```
  - 常用方法:
    - URL.searchParams: 返回一个 URLSearchParams 对象, 它允许对查询字符串进行读写操作
    - 属性:
      ```
      const url = new URL('https://www.baidu.com/a?page=1');
      url.protocol // https:
      url.host     // www.baidu.com
      url.pathname // /a
      url.search   // ?page=1
      url.href     // https://www.baidu.com/a?page=1
      url.origin   // https://www.baidu.com
      url.searchParams.get('page') // 1
      ```
    - URLSearchParams: 从 URL 获取 params
