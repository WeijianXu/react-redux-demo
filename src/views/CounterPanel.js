import React from 'react';
import Counter from './Counter';
// import SummaryStore from '../stores/SummaryStore';
import store from '../Store.js';


const getOwnState = function() {
  const state = store.getState();
  // 由于这里的复杂程度很低，没有进行进一步的过滤，从而防止无效的的更新
  let sum = 0;
  for(let k in state) {
    if (state.hasOwnProperty(k)) {
      sum += state[k];
    }
  }
  return {
    value: sum
  };
};

const CounterPanelContainer = (props) => {
  const { onForceUpdate, value } = props;
  return (
    <div>
      <Counter caption="First" />
      <Counter caption="Second" />
      <Counter caption="Third" />
      <hr />
      <div>
        <button onClick={onForceUpdate} >Repaint</button>
        <span>Total Count: {value}</span>
      </div>
    </div>
  )
}

export default class CounterPanel extends React.Component {

  constructor(props) {
    super(props);
    // this.onCounterUpdate = this.onCounterUpdate.bind(this);
    // this.initVals = [0, 10, 20];
    this.onChange = this.onChange.bind(this);
    /*this.state = {
      // sum: this.initVals.reduce((a, b) => a + b, 0),
      sum: SummaryStore.getSummary(),
    };*/
    this.state = getOwnState();
  }

  render() {
    console.log('Enter CounterPanel render');
    // 注意不能将 `onForceUpdate={this.forceUpdate}` 注册到 Counter 组件上，`this.forceUpdate` 函数的调用必须在本容器组件的上下文中
    // 所以此处使用 `() => this.forceUpdate()` 注册到 Counter 组件的 onForceUpdate 属性上
    return <CounterPanelContainer onForceUpdate={() => this.forceUpdate()} value={this.state.value} />;
  }

  componentDidMount() {
    console.log('Enter CounterPanel componentDidMount');
    // SummaryStore.addChangeListener(this.onChange);
    store.subscribe(this.onChange); // 当子组件对应的全局 store 变化时，触发父组件的订阅的回调函数。
  }

  componentWillUnmount() {
    console.log('Enter CounterPanel componentWillUnmount');
    // SummaryStore.removeChangeListener(this.onChange);
    store.unsubscribe(this.onChange);
  }

  /*onCounterUpdate(newCount, preCount) {
    this.setState({
      sum: this.state.sum + newCount - preCount, // 加上 newCount - preCount 变化的值 
    });
  }*/

  onChange() {
    /*this.setState({
      sum: SummaryStore.getSummary(),
    });*/
    this.setState(getOwnState());
  }

}
