/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './container.scss';

import AddItem from './add-item.jsx';
import TodoList from './todo-list.jsx';

import { setNewItemVisibility } from '../actions';

const TodoContainer = ({ dispatch }) => {
  function addTaskClick() {
    dispatch(setNewItemVisibility(true));
  }
  return (
    <article>
      <h1>TodoList</h1>
      <TodoList />
      <AddItem />
      <button className={styles.addTask} onClick={addTaskClick}>
        {__('Add Task, saas')}
      </button>
    </article>
  );
};

TodoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};


export default connect()(TodoContainer);
