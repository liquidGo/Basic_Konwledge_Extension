## position定位
### 灵感
- 什么是position定位？
  - position 布局主要是让元素处于特定的位置,从而达到布局的效果。
- position定位有哪些？
  - 静态定位：static
    - 默认定位，元素正常的出现在文档流中。
  - 相对定位：relative
    - 根据自身所在的位置进行定位。
  - 绝对定位：absolute
    - 决定定位根据父级带有position定位的元素进行定位，如果父级都没有定位，那么根据body进行定位。
  - 固定定位：fixed
    - 根据父级带有position定位的元素进行定位，如果父级不存在position定位，那么根据窗口进行定位。
  - 粘性定位：sticky
    - 在屏幕的可视范围内不会触发效果，当移出可视范围后会变为fixed吸顶效果。
