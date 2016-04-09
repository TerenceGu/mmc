/**
 * Created by fed on 16/4/9.
 */
import React from 'react';

import { connect } from 'react-redux';

import { removeTodoItem } from '../actions';

import styles from './todo-list.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  removeItem(index) {
    this.props.dispatch(removeTodoItem(index));
  }
  render() {
    return (
      <ul className={styles.todoItemContainer}>
        {this.props.todoItems.map((content, index) => (
          <li className={styles.todoItem}
            key={index} onClick={() => this.removeItem(index)} >
            {content}
          </li>
        ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todoItems: React.PropTypes.arrayOf(React.PropTypes.string)
};

const mapStateToProps = ({todo_list}, ownProp) => {
  return {
    todoItems: todo_list.todoList
  }
};

export default connect(mapStateToProps)(TodoList);