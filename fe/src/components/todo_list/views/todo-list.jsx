/**
 * Created by fed on 16/4/9.
 */
import React from 'react';

import { connect } from 'react-redux';

import { removeTodoItem } from '../actions';

import styles from './todo-list.scss';

const TodoList = ({ dispatch, todoItems }) => {
  const removeItem = index => () => dispatch(removeTodoItem(index));
  return (
    <ul className={styles.todoItemContainer}>
      {todoItems.map((content, index) => (
        <li className={styles.todoItem}
          key={index} onClick={removeItem(index)}
        >
          {content}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoItems: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = ({ todo_list }) => (
  {
    todoItems: todo_list.todoList
  }
);

export default connect(mapStateToProps)(TodoList);
