import React from 'react';
import Counter from './widgets/Counter';
/**
 * 组件渲染，周期函数执行先后顺序
 *  Enter CounterPanel render
    Enter componentWillMount First
    Enter First render
    Enter componentWillMount Second
    Enter Second render
    Enter componentWillMount Third
    Enter Third render
    Enter componentDidMount First
    Enter componentDidMount Second
    Enter componentDidMount Third
 */
export default class CounterPanel extends React.Component {

  constructor(props) {
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.initVals = [0, 10, 20];
    this.state = {
      sum: this.initVals.reduce((a, b) => a + b, 0),
    };
  }

  render() {
    console.log('Enter CounterPanel render');
    return (
      <div>
        <Counter caption="First" onUpdate={this.onCounterUpdate} initValue={this.initVals[0]} />
        <Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initVals[1]} />
        <Counter caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initVals[2]} />
        <hr />
        <div>
          <button onClick={() => this.forceUpdate()} >Repaint</button>
          <span>Total Count: {this.state.sum}</span>
        </div>
      </div>
    );
  }

  onCounterUpdate(newCount, preCount) {
    this.setState({
      sum: this.state.sum + newCount - preCount, // 加上 newCount - preCount 变化的值 
    });
  }

}
