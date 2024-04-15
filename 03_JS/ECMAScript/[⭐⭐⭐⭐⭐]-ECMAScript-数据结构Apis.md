## ECMAScript-数据结构Apis

### ECMAScript5(2014)

#### Array

- [reduce((prev,current,index,arr)=>prev+current,initialValue)](https://blog.csdn.net/weixin_48594833/article/details/128830644)：循环遍历并且累加，可以做的事情非常多



### ECMAScript6(2015)



#### Array

- Array.from(datas,data=>处理data)：将类数组（length属性+key===number）对象转换成真数组
- Array.of(parms1,param2,...)-->[param1,param2]：将参数转换成数组
- Array.fill(填充参数，开始下标)：从开始下标填充参数

#### String

- includes(1）：字符串是否包含1



### ECMAScript7(2016)

#### Array

- .includes



### ECMAScript8(2017)

#### Object

- Object.values：返回所有值组成的数组
- Object.entries：返回键值对组成的二维数组



### ECMAScript10(2019)

#### Object

- Object.formEntries：还原Object.entries的二维数组



#### Array

- Array.flat(arr)：二维数组拍平
- Array.flatMap((value)=>[value])：二维数组拍平，可Map进行预处理



### ECMAScript14(2023)

#### Array

- Array.findLast/findLastIndex：从后往前查找并返回



