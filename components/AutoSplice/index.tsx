import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Props } from "./interface";
import "./style.scss";

const defaultProps = {
  className: "",
  rows: 1
};

export default (prperties: Props) => {
  if (!Array.isArray(prperties.children)) {
    console.error("AutoSplice just receive children as array");
    return null;
  }
  const props = Object.assign({}, defaultProps, prperties);
  const { className, children, rows } = props;
  const [show, setShow] = useState(false);
  const [showNum, setShowNum] = useState(children.length as number);
  const containerRef = useRef();

  useEffect(() => {
    const containerDom: HTMLElement = containerRef.current;
    const containerRect = containerDom.getBoundingClientRect();

    const { paddingLeft, paddingRight } = getComputedStyle(containerDom);
    const renderWidth =
      containerRect.width - parseInt(paddingLeft) - parseInt(paddingRight);
    const children = containerDom.children;

    let childrenWidth = 0;
    let renderNum = 0;

    for (let i = 0; i < children.length; i++) {
      const childWidth = children[renderNum].getBoundingClientRect().width;
      const { marginLeft, marginRight } = getComputedStyle(children[renderNum]);
      childrenWidth +=
        childWidth + parseInt(marginLeft) + parseInt(marginRight);

      if (childrenWidth > renderWidth * rows) {
        break;
      } else {
        renderNum = i;
      }
    }
    setShowNum(renderNum);
    setShow(true);
  }, [children.length]);

  return (
    <div
      ref={containerRef}
      className={`auto-splice-container ${className} ${
        show ? "auto-splice-container--show" : ""
      }`}
    >
      {(children as []).slice(0, showNum).map(v => v)}
    </div>
  );
};
