/**
 * Created by fed on 16/4/9.
 */
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import styles from './add-item.scss';

import { addTodoItem, setNewItemVisibility } from '../actions';

const AddItem = ({ dispatch, hint, addItemVisible }) => {
  let input;
  function addATodoItem() {
    const value = input.value;
    if (!value) return;
    input.value = '';
    dispatch(setNewItemVisibility(false));
    dispatch(addTodoItem(value));
  }
  function cancelAdd() {
    dispatch(setNewItemVisibility(false));
  }
  return (
    <div className={addItemVisible ? styles.show : styles.hidden}>
      <input className={styles.input} type="text"
        placeholder={hint} ref={node => { input = node; }}
      />
      <button className={classnames(styles.button, styles.add)}onClick={addATodoItem}>
        {__('Add Task')}
      </button>
      <button className={styles.button} onClick={cancelAdd}>
        {__('Cancel')}
      </button>
    </div>
  );
};

AddItem.propTypes = {
  addItemVisible: React.PropTypes.bool.isRequired,
  hint: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

AddItem.defaultProps = {
  hint: 'Type what you\'re going to do...'
};

const mapStateToProps = ({ todo_list }) => (
  {
    addItemVisible: todo_list.addItemVisible
  }
);

export default connect(mapStateToProps)(AddItem);
