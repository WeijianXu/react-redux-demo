import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {
  /**
   * Provide 需要定义类的 childContextTypes，且必须和 getChildContext 对应
   * 这样子组件才能访问到 context
   * @type {Object}
   */
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
};
