import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
  };

  static defaultProps = {
    initValue: 0, // 当组件缺省该属性时，使用该默认值
  };

  constructor(props) {
    super(props);
    this.onClickIncBtn = this.onClickIncBtn.bind(this);
    this.onClickDecBtn = this.onClickDecBtn.bind(this);

    this.state = {
      count: props.initValue,
    };
  }

  onClickIncBtn() {
    this.setState({
      count: this.state.count + 1,
    });
    // 使用下面任意一条语句，都将提示 Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // 造成的影响是：点击 + 按钮3下，状态值不能被 render，而点击 - 按钮，却发现状态值为2，因为状态值已经被改变了。
    // this.state.count = this.state.count + 1;
    // ++this.state.count
    // this.state.count += 1;
  }

  onClickDecBtn() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { caption } = this.props;
    const countSty = {
      margin: '1em',
    }
    return (
      <div>
        <button style={countSty} onClick={this.onClickIncBtn} >+</button>
        <button style={countSty} onClick={this.onClickDecBtn} >-</button>
        <span>
          {caption} count:<span style={countSty}>{this.state.count}</span>
        </span>
      </div>
    );
  }
}
