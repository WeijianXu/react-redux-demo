import * as AcTypes from './ActionTypes';
// import Dispatcher from './AppDispatcher';

export const increment = (caption) => {
  /*Dispatcher.dispatch({
    type: AcTypes.INC,
    caption: caption,
  });*/
  return {
    type: AcTypes.INC,
    caption: caption,
  };
}

export const decrement = (caption) => {
  /*Dispatcher.dispatch({
    type: AcTypes.DEC,
    caption: caption,
  });*/
  return {
    type: AcTypes.DEC,
    caption: caption,
  };
}
