import { createSlice } from '@reduxjs/toolkit';
import { apiRequest } from '../api';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: 'idle',
  },
  reducers: {
    createTodoRequest(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    createTodoResponse(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.todos.push(action.payload);
      }
    },
    fetchTodoRequest(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    fetchTodoResponse(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.todos = action.payload;
      }
    },
    updateTodoRequest(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    updateTodoResponse(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        const updatedTodoIndex = state.todos.findIndex(
          (todo) => todo.id === action.payload
        );
        const updatedTodo = state.todos[updatedTodoIndex];
        state.todos[updatedTodoIndex].completed = !updatedTodo.completed;
      }
    },
    deleteTodoRequest(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    deleteTodoResponse(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    },
  },
});

const {
  fetchTodoRequest,
  fetchTodoResponse,
  createTodoRequest,
  createTodoResponse,
  updateTodoRequest,
  updateTodoResponse,
  deleteTodoRequest,
  deleteTodoResponse,
} = todosSlice.actions;

export default todosSlice.reducer;

export const createTodo = (query) => async (dispatch) => {
  dispatch(createTodoRequest());
  const body = {
    query,
  };

  const { createTodo: newTodo } = await apiRequest(body);
  dispatch(createTodoResponse(newTodo));
};

export const fetchTodos = (query) => async (dispatch) => {
  dispatch(fetchTodoRequest());
  const body = {
    query,
  };

  const { todos } = await apiRequest(body);
  dispatch(fetchTodoResponse(todos));
};

export const updateTodo = (query, variables = {}) => async (dispatch) => {
  dispatch(updateTodoRequest());
  const body = {
    query,
  };

  const { updateTodo: updatedTodoId } = await apiRequest(body);
  dispatch(updateTodoResponse(updatedTodoId));
};

export const deleteTodo = (query) => async (dispatch) => {
  dispatch(deleteTodoRequest());
  const body = {
    query,
  };

  const { removeTodo: removedTodoId } = await apiRequest(body);
  dispatch(deleteTodoResponse(removedTodoId));
};
