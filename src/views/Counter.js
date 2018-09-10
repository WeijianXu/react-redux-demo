import React from 'react';
import PropTypes from 'prop-types';
// import CounterStore from '../stores/CounterStore';
import * as Actions from '../Actions';
import store from '../Store.js';

const Counter = (props) => {
  const { caption, onIncrement, onDecrement, value } = props;
  console.log(`Enter ${caption} render`);
  return (
    <div>
      <button onClick={onIncrement} >+</button>
      <button onClick={onDecrement} >-</button>
      <span>
        {caption} count:<span className="countTotal">{value}</span>
      </span>
    </div>
  );
};

export default class CounterContainer extends React.Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  componentWillReceiveProps(nextProps) {
    console.log(`Enter componentWillReceiveProps ${this.props.caption}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 判断新的 props、state 是否和当前的 props、state 不同，不同则返回 true，即需要渲染，否则不渲染。
    // 在此之前，componentWillReceiveProps 函数将被调用，返回 false 之后，后续 render 过程将不再进行，
    // 此时更新过程，不包括 WillMount/DidMount 等装载阶段生命周期函数。
    // return nextProps.caption !== this.props.caption || nextState.count !== this.state.count;
    return nextProps.caption !== this.props.caption || nextState.value !== this.state.value;
  }

  componentWillMount() {
    console.log(`Enter componentWillMount ${this.props.caption}`);
  }

  render() {
    const { caption } = this.props;
    console.log(`Enter ${caption} render`);
    return <Counter caption={caption} onIncrement={this.onIncrement} onDecrement={this.onDecrement} value={this.state.value} />;
  }

  componentDidMount() {
    // DidMount 周期函数需要等所有组件都渲染完毕之后，再按照 Counter 调用的先后顺序（节点数顺序）依次被调用
    console.log(`Enter componentDidMount ${this.props.caption}`);
    // CounterStore.addChangeListener(this.onChange);
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    // CounterStore.removeChangeListener(this.onChange);
    store.unsubscribe(this.onChange);
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

  onIncrement() {
    // this.updateCount(true);
    // Actions.increment(this.props.caption);

    // 使用 Flux 框架时，我们在 Actions.js 中使用 Dispatcher，所以直接使用 `Actions.increment(this.props.caption);`
    // 现在我们在 Redux 中，改造了 Actions.js ，使之不依赖于 Dispatcher，而使用 store 上的全局 dispatch 函数。如下所示：
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    // this.updateCount(false);
    // Actions.decrement(this.props.caption);
    store.dispatch(Actions.decrement(this.props.caption));
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
    /*this.setState({
      count: CounterStore.getCounterValues()[this.props.caption],
    });*/
    this.setState(this.getOwnState());
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption],
    };
  }
}
