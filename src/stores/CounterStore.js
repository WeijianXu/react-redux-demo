import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import * as AcTypes from '../ActionTypes';

const counterValues = {
  First: 0,
  Second: 10,
  Third: 20,
};

// 定义事件名称，任意名称即可，但是需要保证的是 on 和 emit 的事件是一致的
const CHANGE_EVENT = 'counter.change';

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues() {
    return counterValues;
  },
 
  emitChange(event) {
    // 为什么我们不将事件名作为参数传进来了呢？
    // 表面上更加灵活。但是使得组件 Counter 需要绑定两种事件，然后并没有实际的用处。
    // 因为我们在 Counter 的组件派发的事件，已经在 ActionType 中区分开了，没有必要再次区分一下。
    // 而且注册的事件越少，性能越好。此时只需要在此处注册的地方 AppDispatcher.register 区分一下即可。
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

CounterStore.dispatcherToken = AppDispatcher.register((action) => {
  if (action.type === AcTypes.INC) {
    counterValues[action.caption]++;
    CounterStore.emitChange();
  } else if (action.type === AcTypes.DEC) {
    counterValues[action.caption]--;
    CounterStore.emitChange();
  }
});

export default CounterStore;
