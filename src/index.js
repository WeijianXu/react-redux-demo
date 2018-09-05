import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter from './ClickCounter';
import CounterPanel from './CounterPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterPanel />, document.getElementById('root'));
registerServiceWorker();
