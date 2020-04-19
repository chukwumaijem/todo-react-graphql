import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo, updateTodo } from './TodosSlice';
import { REMOVE_TODO, UPDATE_TODO } from './queries';

function Todo({ todo, deleteTodoAction, updateTodoAction }) {
  const { id, text, completed } = todo;

  const handleTodoDelete = () => {
    deleteTodoAction(REMOVE_TODO(id));
  };

  const handleTodoUpdate = () => {
    updateTodoAction(UPDATE_TODO(id));
  };

  return (
    <div
      className={`
      row
      card-body
        list-group-item-${completed ? 'success' : 'info'}
        `}
    >
      <span className="col-sm-8">{text}</span>
      <button
        onClick={handleTodoUpdate}
        className={`col-sm-2 btn btn-${completed ? 'success' : 'info'}`}
        type="button"
      >
        {completed ? 'Done' : 'Pending'}
      </button>
      <button
        onClick={handleTodoDelete}
        className="col-sm-2 btn btn-danger"
        type="button"
      >
        Remove
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteTodoAction: deleteTodo,
  updateTodoAction: updateTodo,
};

export default connect(null, mapDispatchToProps)(Todo);
