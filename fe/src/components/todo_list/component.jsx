/**
 * Created by fed on 16/4/8.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TodoComponent from './views/todo-container.jsx';

render(
  <Provider store={window.reduxState}>
    <TodoComponent />
  </Provider>
  , document.getElementById('todo_listComponent'));
