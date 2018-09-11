import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import Provider from './Provider.js';
import App from './COUNTER';
import registerServiceWorker from './registerServiceWorker';

/**
 * 此时我们使用 react-redux 中提供的 Provider 组件
 * 它比我们自身定义的 ./Provider.js 要严谨的多，要求 Provider 组件具备下面三个函数：
 * - subscribe
 * - dispathc
 * - getState
 *
 * 细心点我们可以发现，我们使用 context 属性时，上面三个函数我们我们是直接调用 context.store 上对应的方法的。
 * 应该 react-redux 中提供的 Provider 组件 和 context.store 之间存在某些关系（尚未探究）。
 */
ReactDOM.render(
  (<Provider store={App.store} >
    <App.Component />
  </Provider>), 
  document.getElementById('root'));
registerServiceWorker();
