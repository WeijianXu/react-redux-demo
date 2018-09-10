import * as AcTypes from './ActionTypes.js';

export default (state, action) => {
  const { caption } = action;

  switch (action.type) {
    case AcTypes.INC:
      return {
        ...state,
        [caption]: state[caption] + 1,
      };

    case AcTypes.DEC:
      return {
        ...state,
        [caption]: state[caption] - 1,
      };

    default:
      return state;
  }
}