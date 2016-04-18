import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Component from './views/container.jsx';

render(
  <Provider store={window.reduxState}>
    <Component />
  </Provider>
  , document.getElementById('subscribeComponent'));
