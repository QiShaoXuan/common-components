# 一些常用 react 组件总结

## RowText

换行文本

### 何时使用

- 仅展示一段内容的前 n 行

- 第 n 行无法展示时显示省略号

### 使用

```jsx
import { RowText } from 'Components';

<RowText content={content} />
```



### API

|    参数    |                           说明                           |                 类型                  |   默认值   | 是否必须 |
| :--------: | :------------------------------------------------------: | :-----------------------------------: | :--------: | :------: |
|  content   |                         文本内容                         |                string                 |     ""     |    是    |
|  fontSize  |                         文字大小                         |                number                 |     22     |    否    |
|    rows    |                      仅显示几行文本                      |                number                 |     1      |    否    |
| lineHeight |                           行高                           |                number                 |     1      |    否    |
|    mode    | 模式，`normal`文字正常截断，`ellipsis`文字结尾显示省略号 |          `normal`|`ellipsis`          | `ellipsis` |    否    |
| className  |                        额外的类名                        |                string                 |     ""     |    否    |
|    Tag     |                      文本容器的元素                      | string(`keyof JSX.IntrinsicElements`) |   `div`    |    否    |

