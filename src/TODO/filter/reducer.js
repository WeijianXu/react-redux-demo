import { FILTER_SET } from './actionTypes.js';
import { FilterType } from '../contants.js';

export default (state = FilterType.ALL, action) => {
  switch(action.type) {
    case FILTER_SET:
      return action.filter;

    default:
      return state;
  }
}