import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Summary = (props) => {
  const { value } = props;
  console.log(`Enter Summary render`);
  return (<span>Total Count: {value}</span>);
};

function getOwnState(state) {
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
}

function mapStateToProps(state, ownProps) {
  return  getOwnState(state);
}

export default connect(mapStateToProps)(Summary);

// import Counter from './Counter';
// import SummaryStore from '../stores/SummaryStore';
// import store from '../Store.js';

// export default class Summary extends React.Component {
//   /**
//    * 获取上下文中的全局 store，不在需要多处导入 store.js 
//    * @type {Object}
//    */
//   static contextTypes = {
//     store: PropTypes.object,
//   };

//   constructor(props, context) {
//     super(props, context);
//     // this.onCounterUpdate = this.onCounterUpdate.bind(this);
//     // this.initVals = [0, 10, 20];
//     this.onChange = this.onChange.bind(this);
//     /*this.state = {
//       // sum: this.initVals.reduce((a, b) => a + b, 0),
//       sum: SummaryStore.getSummary(),
//     };*/
//     this.state = this.getOwnState();
//   }

//   render() {
//     console.log('Enter Summary render');
//     // 注意不能将 `onForceUpdate={this.forceUpdate}` 注册到 Counter 组件上，`this.forceUpdate` 函数的调用必须在本容器组件的上下文中
//     // 所以此处使用 `() => this.forceUpdate()` 注册到 Counter 组件的 onForceUpdate 属性上
//     return <span>Total Count: {this.state.value}</span>;
//   }

//   componentDidMount() {
//     console.log('Enter Summary componentDidMount');
//     // SummaryStore.addChangeListener(this.onChange);
//     this.context.store.subscribe(this.onChange); // 当子组件对应的全局 store 变化时，触发父组件的订阅的回调函数。
//   }

//   componentWillUnmount() {
//     console.log('Enter Summary componentWillUnmount');
//     // SummaryStore.removeChangeListener(this.onChange);
//     this.context.store.unsubscribe(this.onChange);
//   }

//   onChange() {
//     /*this.setState({
//       sum: SummaryStore.getSummary(),
//     });*/
//     this.setState(this.getOwnState());
//   }

//   getOwnState() {
//     const state = this.context.store.getState();
//     // 由于这里的复杂程度很低，没有进行进一步的过滤，从而防止无效的的更新
//     let sum = 0;
//     for(let k in state) {
//       if (state.hasOwnProperty(k)) {
//         sum += state[k];
//       }
//     }
//     return {
//       value: sum
//     };
//   }

// }
