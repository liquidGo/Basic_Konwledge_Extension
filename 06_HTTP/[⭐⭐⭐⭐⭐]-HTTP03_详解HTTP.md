## 详解HTTP请求
### 灵感
- 什么是请求头/请求体？
- 请求头/请求体有什么作用？
- 请求头/请求体有哪些常见的字段？
- 缓存和请求头有什么关系？
- 长连接和请求头有什么关系？
- GET/POST请求的请求头/请求体有什么区别？
- Cookie/localStorage/sessionStorage有什么区别？和请求有什么关系？
- Cookie是后端设置的吗？
- 请求头如何设置长连接？
- HTTP各版本变化？
- 长/短连接？长/短轮询？

### 总结
- 什么是请求头/请求体？
  - 请求头：HTTP协议中用于传递请求的额外信息部分，包含了客户端与服务器通信所需的元信息。
  - User-Argent：标记了客户端的浏览器信息。
  - Accept：标记了客户端能够处理的数据类型。
  - Content-type：标记了请求体的类型。
  - Authorization：客户端存储的token信息等，用于后端JWT鉴权。
  - Referer：标记了请求的来源。
  - Host：标记了请求的主机地址。
  - Cache-Control：标记了缓存的方式。
  - Connection：设置链接类型（长连接或者短链接）HTTP1.1中默认开启长连接

- Cookie/sessionStorage/localStorage有什么区别？
  > Cookie：有服务端设置set-Cookie以后自动储存在客户端，每次请求都会自动携带请求头中，大小为4KB。
  > SessionStorage：仅在当前会话下有效，关闭页面或浏览器后被清除，大小为5MB。
  > LocalStorage：除非被手动清除，否则永久保存，大小为5MB。

- 缓存和请求头有什么关系？Cache-control？
  > [缓存机制](../02_HTML/[⭐⭐⭐⭐]-浏览器缓存机制.md#总结)
  > 通过请求头Cache-control来设置强缓存，通过响应头Cache-control:max-age判断是否使用强缓存。
  > 时效采用协商缓存的Etag/Last-Modified来判断是否使用协商缓存。

- 长连接和请求头的关系？
  > 长连接：[了解HTTP](../09_REACT/[⭐⭐⭐⭐⭐]-AbortController.md#总结)
  > 通过设置Connection:keep-alive来设置长连接。在HTTP1.1中自动设置类型为长连接。

- HTTP ChangeLog
  > HTTP1.1：长连接替代1.0短链接、Cache-control max-age替代1.0Expires、Etag替代1.0Last-Modified
  > HTTP2.0：多路复用（stream流式响应）、头部压缩

- 长/短连接？长/短轮询？不同之处？
  > 长、短连接是客户端与服务端建立和保持TCP连接的机制；而长、短轮询是指客户端请求服务端，服务端给予应答的方式。

  > 短连接：每次请求都会建立一个TCP连接，请求结束后立即断开。
  > 长连接：建立一次TCP连接，直到数据返回再断开并进行下一次的连接建立。SSE属于长连接，但是不止接收一次的数据。
  > 长轮询：客户端发送请求，服务端不会立即返回，而是等待有数据更新时才返回，客户端收到数据后再次发送请求。
  > 短轮询：客户端发送请求，服务端立即返回数据，客户端收到数据后再次发送请求。
