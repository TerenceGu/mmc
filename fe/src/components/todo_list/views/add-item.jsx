/**
 * Created by fed on 16/4/9.
 */
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import styles from './add-item.scss';

import { addTodoItem, setNewItemVisibility } from '../actions';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
  }
  addTodoItem() {
    const value = this.input.value;
    if (!value) return;
    this.input.value = '';
    this.dispatch(setNewItemVisibility(false));
    this.dispatch(addTodoItem(value));
  }
  cancelAdd() {
    this.dispatch(setNewItemVisibility(false));
  }
  render() {
    return (
      <div className={this.props.addItemVisible? styles.show : styles.hidden}>
        <input className={styles.input} type="text" placeholder={this.props.hint} ref={node => {
          this.input = node;
        }}/>
        <button className={classnames(styles.button, styles.add)} onClick={this.addTodoItem.bind(this)}>
          {__("Add Task")}
        </button>
        <button className={styles.button} onClick={this.cancelAdd.bind(this)}>
          {__("Cancel")}
        </button>
      </div>
    )
  }
}

AddItem.propTypes = {
  addItemVisible: React.PropTypes.bool.isRequired,
  hint: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

AddItem.defaultProps = {
  hint: 'Type what you\'re going to do...'
};

const mapStateToProps = ({todo_list}, ownProps) => {
  return {
    addItemVisible: todo_list.addItemVisible
  }
};

export default connect(mapStateToProps)(AddItem);