import React from "react";

export default class ErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static defaultProps = {
    component: null,
    callback: null
  };

  componentDidCatch(error) {
    this.setState({
      error: true
    });
    this.props.callback && this.props.callback(error);
  }

  render() {
    if (this.state.error) {
      return this.props.component ? <this.props.component /> : null;
    }

    return this.props.children;
  }
}
