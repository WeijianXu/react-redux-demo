import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './todo/';
import { reducer as filterReducer } from './filter/';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default createStore(reducer);
