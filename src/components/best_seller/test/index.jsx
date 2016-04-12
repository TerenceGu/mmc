/**
 * Created by fed on 16/4/11.
 */
import { createStore, combineReducers } from 'redux';
import reducer from '../index.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TodoComponent from '../views/container.jsx';


const store = createStore(combineReducers(
  reducer
));

render(
<Provider store={store}>
<TodoComponent />
</Provider>
  , document.getElementById('root'));
