/**
 * Created by fed on 16/4/6.
 */
import React from 'react';
import { createStore } from 'redux';
import helloReducer from './reducers';

window.reduxState = createStore(helloReducer);

