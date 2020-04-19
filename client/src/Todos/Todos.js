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
    <div className="app">
      <form onSubmit={handleTodoSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter todo"
          value={newTodo}
          onChange={handleTodoChange}
        />
        <button className="btn btn-primary px-5 my-2" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
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
