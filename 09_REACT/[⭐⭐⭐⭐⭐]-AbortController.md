## AbortController
### 灵感
- 什么是AbortController
- AbortController的使用场景
- AbortController的使用方法
- 什么是SSE/stream流式响应
- 什么是websocket？和SSE的区别？
- 什么是长轮询？什么是长链接？
- 什么是addEventListener
- 什么是fetch
- 这些API的引入场景？

### 总结
- 什么是AbortController？
  - AbortController是一个DOM API，主要用于中断请求，XMLHttpRequest支持中断请求，而fetch不支持，所以AbortController就是为了解决fetch/addEventListener监听器不支持中断请求的问题而出现的。
    - XMLHttpRequest：
      ```
        let xhr = new XMLHttpRequest();
        xhr.method = 'GET';
        xhr.url = 'https://slowmo.glitch.me/5000';
        xhr.open(method, url, true);
        xhr.send();
        // Abort the request at a later stage
        abortButton.addEventListener('click', function() {
          xhr.abort();
        });
      ```
    - addEventListener：
      ``` 
        const controller = new AbortController();
        function callback (e) {
          document.addEventListener('mousemove',  (e) => {
              
          },{
              signal: controller.signal  
          });
        }
        document.addEventListener('mousedown', callback);
        document.addEventListener('mouseup', controller.abort);

      ```
    - fetch：
      ```
        npm install @microsoft/fetch-event-source
        let controller = new AbortController() // 终止长连接的情况
        const eventSource = fetchEventSource(fetchUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            params
        ),
        signal: controller.signal,
        onopen() {
          console.log('open')
        },
        onmessage(event) {
          console.log('onMessage',event.data)
          let data = event.data
          let jsonData = JSON.parse(data);
        },
        onclose() {
          controller.abort();//出错后不要重试
          eventSource.close();
        },
        onerror(error) {
          console.log('close',error)
          controller.abort();//出错后不要重试
          eventSource.close();
        }
        })
        }
      ```
- 什么是fetch？[了解请求](../06_HTTP/[⭐⭐⭐⭐⭐]-HTTP请求.md#请求方式)
- 什么是长连接？什么是轮询？
  > [了解链接机制](http://www.bryh.cn/a/152599.html)
  - 长连接：在一个TCP连接上发送多个数据包
    ```
      HTTP 长连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。

      怎么才能使用 HTTP 的 Keep-Alive 功能？
      在 HTTP 1.0 中默认是关闭的，如果浏览器要开启 Keep-Alive，它必须在请求的包头中添加：
      Connection: Keep-Alive
      然后当服务器收到请求，作出回应的时候，它也添加一个头在响应中：
      Connection: Keep-Alive
      这样做，连接就不会中断，而是保持连接。当客户端发送另一个请求时，它会使用同一个连接。这一直继续到客户端或服务器端提出断开连接。

      从 HTTP 1.1 开始， 就默认是开启了 Keep-Alive，如果要关闭 Keep-Alive，需要在 HTTP 请求的包头里添加：
      Connection:close
      现在大多数浏览器都默认是使用 HTTP/1.1，所以 Keep-Alive 都是默认打开的。一旦客户端和服务端达成协议，那么长连接就建立好了。
      所以，HTTP 长连接减少了 TCP 连接资源的开销。

    ```
  - 如果使用了 HTTP 长连接，如果客户端完成一个 HTTP 请求后，就不再发起新的请求，此时这个 TCP 连接一直占用着不是挺浪费资源的吗？
    - 对没错，所以为了避免资源浪费的情况，web 服务软件一般都会提供 keepalive_timeout 参数，用来指定 HTTP 长连接的超时时间。
    比如设置了 HTTP 长连接的超时时间是 60 秒，web 服务软件就会启动一个定时器，如果客户端在完后一个 HTTP 请求后，在 60 秒内都没有再发起新的请求，定时器的时间一到，就会触发回调函数来释放该连接。
  - 轮询：
    - 由客户端发起请求，然后服务器端返回数据，然后客户端再发起请求，然后服务器端再返回数据，如此循环往复。
    - 缺点：浪费资源，不及时，不实时
  - 长轮询：
    - 建立一次长连接，自己选择关闭的时机，实时接收服务端的最新数据，可以使用AbortController进行链接的中断。server-send-events就属于长轮询的一种。
- 什么是SSE/stream流式响应？
  - 了解：什么是HTTP协议？[了解网络模型](../06_HTTP/[⭐⭐⭐⭐⭐]-HTTP网络相关.md#网络相关)
  - 什么是SSE？
    - SSE全名（server-send-events）：是一种基于HTTP，服务端向客户端单向推送数据的技术。
    - SSE特性：支持服务器单向实时推送数据到客户端、支持自动重连
    - 什么是EventSource对象？和fetch接收stream的区别？
      - 举例两种方式：
        - EventSource：
          ```
            var es = new EventSource(result.url, { withCredentials: true });
            es.onerror = function (event) {
                //执行错误的页面逻辑
                es.close();
            }
            es.onmessage = function (event) {
                //console.log(event.data);

                if (event.data == "[DONE]") {
                    //执行完成的页面逻辑
                    es.close();
                }else{

                }
            }
          ```
        - fetch：
          ```
            封装好的fetchEventSource：npm install @microsoft/fetch-event-source
            fetch(result.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ test: 'test' }),
            }).then(response => {
              const reader = response.body.getReader();
              const decoder = new TextDecoder('utf-8');
              let buffer = '';

              function processStreamResult(result2) {
                const chunk = decoder.decode(result2.value, { stream: !result2.done });
                buffer += chunk;
                //逐条解析后端返回数据
                const lines = buffer.split('\n');
                buffer = lines.pop();

                lines.forEach(line => {
                  if (line.trim().length > 0) {
                    //console.log(line);

                    if (line == 'data: [DONE]') {
                      //执行完成的页面逻辑
                    } else {

                    }

                  }
                });

                if (!result2.done) {
                  return reader.read().then(processStreamResult);
                }
              }

              return reader.read().then(processStreamResult);
            })
              .catch(error => {
                //console.error('Error:', error);
              });
          ```