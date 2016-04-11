/**
 * Created by fed on 16/4/6.
 */
import { createStore, combineReducers } from 'redux';

import todoListReducers from '../../components/todo_list';
import firstReducers from '../../components/first';

import './style.scss';

const reducer = combineReducers(Object.assign(
  {},
  todoListReducers,
  firstReducers
));

window.reduxState = createStore(reducer);

