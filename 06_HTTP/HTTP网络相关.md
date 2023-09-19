## 网络相关

### 相关知识点

- OSI 和 HTTP 模型有什么关联？
- 经典五层模型
- HTTP 协议

### 问题抽象

- 什么是 HTTP/TCP 网络协议？
- 为什么要分层？
- 什么是三次握手四次挥手？
- 面试如何解答？

### 总结

#### 经典五层模型介绍

1. 应用层
    > 客户端先发送报文
   - HTTP
   - FTP
   - ...

2. 传输层
    > 多个进程无法识别，此时需要用到端口号来区分多个进程，源端口+目标端口封装成段。
   - TCP
   - UDP
   - ...
3. 网络层
   > 无法通过网卡的 mac 地址进行快速定位，此时需要 ip 进行寻址定位，源ip+目标ip封装成包。
   - DNS 服务器解析拿到 IP 地址等一系列操作(偏运维技术)
4. 数据链路层
   > 把源mac地址+目标mac地址封装成帧，通过交换机进行数据的交换。
   - 规定指定的信号让计算机读懂，例：192.168.0.1
5. 物理层
   > 通过物理媒介传输 0111001 二进制比特。
   - 电磁波
   - 光、电
   - ...


```tefcha
应用层：客户端发送请求
传输层：+源端口+目标端口=段
网络层：+源IP+目标IP=包
链路层：+源MAC+目标Mac=帧
物理层：网关会找到ip和mac地址
```


<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
</head>

<body>
  <div class="tefcha">
# This is a example.
# NOTE:
#   The line starts with "#" is comment.
#   "\n" is newline.
#   All indent must be "  " (2 white spaces).

Start\nFizzBuzz!
i = 1

while i <= 100
  if i % 15 == 0
    print("FizzBuzz")
  elif i % 3 == 0
    print("Fizz")
  elif i % 5 == 0
    print("Buzz")
  else
    print(i)
  i = i + 1
End
  </div>
  <script src="https://unpkg.com/tefcha/umd/tefcha.js"></script>
  <script>
    tefcha.initialize();
  </script>
</body>

</html>