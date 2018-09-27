import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE } from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: TODO_ADD,
  completed: false,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TODO_TOGGLE,
  id,
});

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  id,
});
