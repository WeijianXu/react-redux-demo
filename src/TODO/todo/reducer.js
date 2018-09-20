import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE } from './actionTypes.js';

export default (state = [], action) => {
  const { id, text } = action;
  switch(action.type) {
    case TODO_ADD:
      return [
        {
          id,
          completed: false,
          text,
        },
        ...state,
      ];

    case TODO_TOGGLE:
      return state.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            completed: !ele.completed,
          };
        }
        return ele;
      });

    case TODO_REMOVE:
      return state.filter((ele) => {
        return ele.id !== id;
      });

    default:
      return state;

  }
}