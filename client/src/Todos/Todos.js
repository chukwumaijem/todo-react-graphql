import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, createTodo } from './TodosSlice';
import { READ_TODOS, CREATE_TODO } from './queries';
import Todo from './Todo';

function Todos({ todos, fetchTodosActions, createTodoAction }) {
  const [newTodo, setNewTodo] = useState('');
  useEffect(() => {
    fetchTodosActions(READ_TODOS);
    // eslint-disable-next-line
  }, []);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    createTodoAction(CREATE_TODO(newTodo));
    setNewTodo('');
  };

  const handleTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="container-sm">
      <h4>Todo App</h4>
      <form onSubmit={handleTodoSubmit}>
        <div className="form-group row">
          <input
            className="form-control col-sm-10"
            type="text"
            placeholder="Enter todo"
            value={newTodo}
            onChange={handleTodoChange}
          />
          <button className="btn btn-primary col-sm-2" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="card">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  fetchTodosActions: fetchTodos,
  createTodoAction: createTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
