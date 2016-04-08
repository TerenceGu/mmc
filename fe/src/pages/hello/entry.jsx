/**
 * Created by fed on 16/4/6.
 */
import { createStore, combineReducers } from 'redux';

import firstReducers from '../../components/first';

import styles from './style.scss';

const reducer = combineReducers(Object.assign(
  firstReducers
));

window.reduxState = createStore(reducer);
