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

  render() {
    console.log('Enter CounterPanel render');
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" initValue={10} />
        <Counter caption="Third" initValue={20} />
        <hr />
        <button onClick={() => this.forceUpdate()} >Repaint</button>
      </div>
    );
  }
}
