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
    <li key={id} className="w-100">
      <span className={completed ? 'done' : 'pending'}>{text}</span>
      <button
        className="btn btn-sm btn-danger rounded-circle float-right"
        onClick={handleTodoDelete}
      >
        X
      </button>
      <button
        className={`btn btn-sm float-right ${
          completed ? 'btn-success' : 'btn-info'
        }`}
        onClick={handleTodoUpdate}
      >
        {completed ? <span>Completed</span> : <span>Not completed</span>}
      </button>
    </li>
  );
}

const mapDispatchToProps = {
  deleteTodoAction: deleteTodo,
  updateTodoAction: updateTodo,
};

export default connect(null, mapDispatchToProps)(Todo);
