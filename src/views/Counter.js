import React from 'react';
import PropTypes from 'prop-types';
import CounterStore from '../stores/CounterStore';
import * as Actions from '../Actions';

export default class Counter extends React.Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func,
  };

  static defaultProps = {
    initValue: 0, // 当组件缺省该属性时，使用该默认值
    onUpdate: f => f,
  };

  constructor(props) {
    super(props);
    this.onClickIncBtn = this.onClickIncBtn.bind(this);
    this.onClickDecBtn = this.onClickDecBtn.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      count: CounterStore.getCounterValues()[props.caption],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(`Enter componentWillReceiveProps ${this.props.caption}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 判断新的 props、state 是否和当前的 props、state 不同，不同则返回 true，即需要渲染，否则不渲染。
    // 在此之前，componentWillReceiveProps 函数将被调用，返回 false 之后，后续 render 过程将不再进行，
    // 此时更新过程，不包括 WillMount/DidMount 等装载阶段生命周期函数。
    return nextProps.caption !== this.props.caption || nextState.count !== this.state.count;
  }

  componentWillMount() {
    console.log(`Enter componentWillMount ${this.props.caption}`);
  }

  render() {
    console.log(`Enter ${this.props.caption} render`);
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.onClickIncBtn} >+</button>
        <button onClick={this.onClickDecBtn} >-</button>
        <span>
          {caption} count:<span className="countTotal">{this.state.count}</span>
        </span>
      </div>
    );
  }

  componentDidMount() {
    // DidMount 周期函数需要等所有组件都渲染完毕之后，再按照 Counter 调用的先后顺序（节点数顺序）依次被调用
    console.log(`Enter componentDidMount ${this.props.caption}`);
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  /*onClickIncBtn() {
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
  }*/

  onClickIncBtn() {
    // this.updateCount(true);
    Actions.increment(this.props.caption);
  }

  onClickDecBtn() {
    // this.updateCount(false);
    Actions.decrement(this.props.caption);
  }

  /*updateCount(isInc) {
    const preCount = this.state.count;
    const newCount = isInc ? preCount + 1 : preCount - 1;
    this.setState({
      count: newCount,
    });
    this.props.onUpdate(newCount, preCount);
  }*/

  onChange() {
    this.setState({
      count: CounterStore.getCounterValues()[this.props.caption],
    });
  }

}
