import React from "react";

// 目前用于合并默认 props
// 其他功能根据需求另行添加
export default (component, { defaultProps = {} }) => {
  return receiveProps => {
    const props = Object.assign({}, defaultProps, receiveProps);

    return component(props);
  };
};
