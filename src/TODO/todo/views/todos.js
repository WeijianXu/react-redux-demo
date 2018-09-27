import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

import './styles.css';

const Todos = (props) => {
  return (
    <div className="todos" >
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Todos;