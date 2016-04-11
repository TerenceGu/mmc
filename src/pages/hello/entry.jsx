/**
 * Created by fed on 16/4/6.
 */
import { createStore, combineReducers } from 'redux';

import todoListReducers from '../../components/todo_list';

import './style.scss';

const reducer = combineReducers(Object.assign(
  {},
  todoListReducers
));

window.reduxState = createStore(reducer);
