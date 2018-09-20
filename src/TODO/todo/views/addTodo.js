import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js'
class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.refInput = this.refInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="add-input" ref={this.refInput}/>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    );
  }

  refInput(node) {
    this.input = node;
  }

  onSubmit(e) {
    e.preventDefault(); // 阻止默认跳转行为

    const input = this.input;
    if (!input.value.trim()) {
      return; // 处理空格
    }
    this.props.onAdd(input.value);
    input.value = '';
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAdd: (v) => {
      dispatch(addTodo(v));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
