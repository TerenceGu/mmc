import React from 'react';

import { connect } from 'react-redux';

//import { removeTodoItem } from '../actions';

import styles from './currency-cate.scss';

const CurrencyCate = ({ dispatch, currency }) => {
  return (
      <div className={styles.currencyCateContainer}>
        <a rel="nofollow" className={styles.currencySelect} title="US$" atr1="USD">US$</a>
        <div className={styles.currencyCate}>

        </div>
      </div>
    );
};

CurrencyCate.propTypes = {
  currency: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.isRequired
};

export default CurrencyCate;
