import React from 'react';

export default class ClickCounter extends React.Component {
  /*static propTypes = {
    name: React.PropTypes.string,
  };*/

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      count: 0,
    };
  }

  onClickButton() {
    this.setState({
      // 使用 `this.state.count++` 将不会有任何效果。
      // 因为 ++ 操作符后置，是先取值，后运算，因此此时使用 `this.setState` 并没有改变 count 的值；
      // 因此，此处打印 count 值为1，而在 `render` 中打印值仍然是 0 。
      // 而且使用 `++this.state.count` 的值`，可以发现此处打印值会累加，
      // 在 render 函数中 count 的值是累加后的值。
      // 【注意】：`++this.state.count` 放置在 setState 前面，并打印，结果是一样的。 
      count: ++this.state.count,
    });
    console.log(this.state.count);
  }

  render() {
    console.log(this.state.count);
    return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        <div>Click Count: {this.state.count}</div>
      </div>
    );
  }
}
