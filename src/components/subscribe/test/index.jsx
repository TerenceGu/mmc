import { createStore, combineReducers } from 'redux';
import reducer from '../index.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Component from '../views/container.jsx';


const store = createStore(combineReducers(
  reducer
));

render(
<Provider store={store}>
<Component />
</Provider>
  , document.getElementById('root'));
