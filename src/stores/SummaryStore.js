import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import * as AcTypes from '../ActionTypes';
import CounterStore from './CounterStore';

const getSummary = function(counterValues) {
  let sum = 0;
  for(let k in counterValues) {
    if (counterValues.hasOwnProperty(k)) {
      sum += counterValues[k];
    }
  }
  return sum;
}

const CHANGE_EVENT = 'summary.change';

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary() {
    return getSummary(CounterStore.getCounterValues());
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

SummaryStore.dispatcherToken = AppDispatcher.register((action) => {
  if (action.type === AcTypes.INC || action.type === AcTypes.DEC) {
    AppDispatcher.waitFor([CounterStore.dispatcherToken]);
    SummaryStore.emitChange();
  }
});

export default SummaryStore;
