import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreator } from 'redux';
import TodoItem from './todoItem.js';
import { FilterType } from '../../contants.js';
import { toggleTodo, removeTodo } from '../actions.js';

const TodoList = (props) => {
  const { data = [], onToggle, onRemove } = props;
  return (
    <ul>
      {
        data.map((elem) => (
          <TodoItem
            id={elem.id}
            key={elem.id}
            text={elem.text}
            completed={elem.completed}
            onToggle={() => onToggle(elem.id)}
            onRemove={() => onRemove(elem.id)}
            />
        ))
      }
    </ul>
  )
};

function mapStateToProps(state, ownProps) {
  const selectTodos = (todos = [], filter) => {
    switch(filter) {
      case FilterType.ALL:
        return todos;

      case FilterType.COMPLETED:
        return todos.filter(item => item.completed);

      case FilterType.UNCOMPLETED:
        return todos.filter(item => !item.completed);

      default:
        throw new Error('unsupported filter');
    }
  }
  return {
    data: selectTodos(state.todos, state.filter),
  };
}

/*function mapDispatchToProps(dispatch) {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemove: (id) => {
      dispatch(removeTodo(id));
    }
  }
}*/
// 使用 bindActionCreator 简化 mapDispatchToProps
/*const mapDispatchToProps = (dispatch) => bindActionCreator({
  onToggle: toggleTodo,
  onRemove: removeTodo,
}, dispatch);
*/
// 下面的映射方式效果一样
const mapDispatchToProps = {
  onToggle: toggleTodo,
  onRemove: removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
