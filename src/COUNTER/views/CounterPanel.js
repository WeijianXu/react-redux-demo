import React from 'react';
import Counter from './Counter';
// import SummaryStore from '../stores/SummaryStore';
// import store from '../Store.js';
import Summary from './Summary.js';

export default class CounterPanel extends React.Component {

  render() {
    console.log('Enter CounterPanel render');
    // 注意不能将 `onForceUpdate={this.forceUpdate}` 注册到 Counter 组件上，`this.forceUpdate` 函数的调用必须在本容器组件的上下文中
    // 所以此处使用 `() => this.forceUpdate()` 注册到 Counter 组件的 onForceUpdate 属性上
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <div>
          <button onClick={() => this.forceUpdate()} >Repaint</button>
          <Summary />
        </div>
      </div>
    );
  }

}
