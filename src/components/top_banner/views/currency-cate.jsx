import React from 'react';

import { connect } from 'react-redux';

//import { removeTodoItem } from '../actions';

import styles from './currency-cate.scss';

const CurrencyCate = ({ dispatch, currency }) => {
  return (
      <a rel="nofollow" className={styles.currencyCate} href="javascript:void(0);
      " onClick="" title="US$" atr1="USD">US$</a>
    );
};

CurrencyCate.propTypes = {
  currency: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.isRequired
};

export default CurrencyCate;
