/**
 * Created by fed on 16/4/6.
 */
import { createStore, combineReducers } from 'redux';

import todo_listReducers from '../../components/todo_list';

import styles from './style.scss';

const reducer = combineReducers(Object.assign(
  todo_listReducers
));

window.reduxState = createStore(reducer);
