## React设计模式
### 灵感
- 什么是设计模式？
- 设计模式如何应用？
- 常见的React设计模式有哪些？
- 有哪些优秀的React设计模式？

### 归总
- 什么是React设计模式？
  - 从开发的可复用性封装来说，React设计模式是一种封装可复用性组件的最佳实践，是一种组件的设计思想。
- 常见的设计模式？
  > State Reducer：在改变值之前做一个判断触发哪些type拦截并作出指定值的改变。    
    - [案例](https://github.com/liquidGo/simply-react)
 
  > Render Props：内-->外：多用例(满足多个需求)组件的最佳实践    
    - [案例](https://github.com/liquidGo/simply-react)
    - 结合Reducer用法:
    ```mermaid
    flowchart TB
      RenderProps--导出value/onChange(action)-->1[StateReducer]
      1--有传入Reducer-->Reducer拦截并写入一些兜底判断保留或者其他处理State的逻辑
      1--无传入Reducer-->直接更新默认的action到State
    ```
    - 简单小案例：RenderProps每次+2，Reducer当大于等于20的时候作出拦截逻辑
    ```JavaScript
      const addReducer = (state, action) => {
        switch (action.type) {
          case "add":
            let index = state.index >= 20 ? 0 : action.index;
            return { ...state, index };
        }
      };

      const ChildrenComponent = (p) => {
        const props = { addReducer: (state, action) => action, ...p };
        const [index, setIndex] = useState({ index: 0 });

        const internalSetState = (change) => {
          const changState = props.addReducer(index, change(index));
          console.log(changState, "changState");
          setIndex((prev) => ({ ...prev, ...changState }));
        };

        const handClick = () => {
          internalSetState((state) => {
            return {
              type: "add",
              index: index["index"] + 2
            };
          });
        };

        return <>{props.children({ index, handClick })}</>;
      };

      export default function App() {
        return (
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <ChildrenComponent addReducer={addReducer}>
              {({ index, handClick }) => {
                console.log(index, handClick);
                return <button onClick={handClick}>测试</button>;
              }}
            </ChildrenComponent>
          </div>
        );
      }
    ```
  
  > Prop Collections：RenderProps，返回公用的，children({value,onChange,...state})。    

  > Prop Getters：内-->外：通过Prop Collections返回一个函数，通过这个函数对onClick做一些附加的函数调用，并且返回所有的Props。    

  > Compound Components：内-->内：复合组件，内从通过Context公用values，其他的复合组件通过Context取值。    

  > Control Props：外-->内：受控模式（外部操控内部数据源）

