import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './Todos/TodosSlice';

export const store = configureStore({
  reducer: todosReducer,
});
