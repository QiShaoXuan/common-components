import * as React from "react";
import { Props } from "./interface";
import { realPx } from "Methods";
import "./style.scss";

const defaultProps: Props = {
  content: "",
  fontSize: 22,
  rows: 1,
  mode: "ellipsis",
  lineHeight: 1,
  className: "",
  Tag: "div"
};

const getExtraStyle = props => {
  const { mode, rows } = props;
  switch (mode) {
    case "normal":
      return {};
    case "ellipsis":
      return rows > 1 ? { WebkitLineClamp: rows } : {};
    default:
      return {};
  }
};

export default React.memo((properties: Props) => {
  const props = Object.assign({}, defaultProps, properties);
  let { content, fontSize, rows, mode, className, Tag, lineHeight } = props;

  // 在显示省略号时会存在兼容问题：部分下方文字会露出一部分
  const extraLineheight = mode === "ellipsis" ? 1 : 0;

  lineHeight = lineHeight < fontSize ? fontSize : lineHeight;
  rows = rows < 1 ? 1 : rows;
  fontSize = realPx(fontSize);

  return (
    <Tag
      className={`elf-text ${
        rows > 1 ? "el-text--much-line" : "el-text--one-line"
      } ${className}`}
      style={{
        fontSize: fontSize,
        height: realPx(lineHeight * rows),
        lineHeight: `${realPx(lineHeight) + realPx(extraLineheight)}px`,
        ...getExtraStyle(props)
      }}
    >
      {content}
    </Tag>
  );
});
