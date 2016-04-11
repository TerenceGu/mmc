/**
 * Created by fed on 16/4/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import styles from './style.scss';
import classAppendLangSpec from '../../vendor/dom-class-append-lang-specific';

import { textOnClick } from './actions';

const Hello = ({ text, onClick }) => (
  <div className={classAppendLangSpec('hello', styles)} onClick={onClick}>
    You've clicked {text} times!~~
  </div>
);

Hello.propTypes = {
  text: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = state => (
  {
    text: state.hello
  }
);

const mapDispatchToProps = dispatch => (
  {
    onClick: () => {
      dispatch(textOnClick);
    }
  }
);


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
