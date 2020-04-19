import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import Todos from './Todos/Todos';
import { store } from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
