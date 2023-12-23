## pom.xml解析

### 灵感
- pom.xml是什么？
- pom.xml有什么用？
- pom.xml怎么写？
- 常用的标签有哪些？
- pom.xml的继承关系是什么？

### 总结
- pom.xml是什么？
  > pom.xml是Maven项目的核心配置文件，用于描述项目的基本信息，以及项目依赖的jar包，插件等。

- pom.xml有什么用？
  > pom.xml可以用于管理项目的依赖，打包，运行等。

- 常用的标签有哪些？
  > 1. groupId：package的唯一标识，一般是公司的域名倒序，如：com.baidu
  > 2. artifactId：项目的唯一标识，一般是项目的名称，如：springboot
  > 3. version：项目的版本号，如：1.0.0
  > 4. packaging：项目的打包方式，如：jar
  > 5. name：项目的名称，如：springboot
  > 6. modules：项目的子模块，如：springboot-web、springboot-service、springboot-dao
  > 7. dependencies：项目的依赖，如：springboot-starter-web、springboot-starter-test
  > 8. build：项目的构建，如：plugins、resources、testResources
  > 9. dependencyManagement：依赖的管理，类似于前端的package-lock.json，管理版本，但是子模块不会继承，需要手动引入。  
