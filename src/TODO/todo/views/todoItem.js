import React from 'react';

const TodoItem = (props) => {
  const { completed, onToggle, text, onRemove } = props;
  return (
    <li className={`todo-item ${completed ? 'todo-completed' : ''}`} >
      <input className="todo-toggle" type="checkbox" checked={completed ? 'checked' : ''} readOnly onClick={onToggle} />
      <label className="todo-text">{text}</label>
      <button className="todo-remove" onClick={onRemove} >×</button>
    </li>
  );
};

export default TodoItem;
