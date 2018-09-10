import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from './Provider.js';
import store from './Store.js';
// import ClickCounter from './ClickCounter';
import CounterPanel from './views/CounterPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (<Provider store={store} >
    <CounterPanel />
  </Provider>), 
  document.getElementById('root'));
registerServiceWorker();
