import React from 'react';
import { connect }  from 'react-redux';
import { setFilter } from '../actions.js';

const Link = (props) => {
  const { children, active, onClick, filter } = props;
  if (active) {
    return (<b className="filter selected">{children}</b>);
  }
  return (
    <a className="filter not-selected" onClick={(e) => {
      e.preventDefault();
      onClick(filter);
    }} >{children}</a>
  )
};

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter,
});
const mapDispatchToProps = {
  onClick: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
