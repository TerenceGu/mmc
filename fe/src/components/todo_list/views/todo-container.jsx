/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect }  from 'react-redux';

import styles from './todo-container.scss';

import AddItem from './add-item.jsx';
import TodoList from './todo-list.jsx';

import { setNewItemVisibility } from '../actions';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  addTaskClick() {
    this.props.dispatch(setNewItemVisibility(true));
  }
  render() {
    return (
      <article>
        <h1>TodoList</h1>
        <TodoList />
        <AddItem />
        <button className={styles.addTask} onClick={this.addTaskClick.bind(this)}>
          {__("Add Task")}
       </button>
      </article>
    )
  }
}

TodoContainer.props = {
  dispatch: PropTypes.func.isRequired
};


export default connect()(TodoContainer);