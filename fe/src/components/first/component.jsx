/**
 * Created by fed on 16/4/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import styles from './style.scss';
import classAppendLangSpec from '../../vendor/dom-class-append-lang-specific';

import { textOnClick } from './actions';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classAppendLangSpec('hello', styles)} onClick={this.props.onClick}>
        You've clicked {this.props.text} times!~~
      </div>
    )
  }
}

Hello.propTypes = {
  text: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.hello
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(textOnClick);
    }
  }
};

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

render(
  <Provider store={window.reduxState}>
    <Component />
  </Provider>,
  document.getElementById('firstComponent')
);