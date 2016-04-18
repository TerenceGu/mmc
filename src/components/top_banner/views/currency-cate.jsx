import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeCurrencyName } from '../../../common/state/currency/actions.js';
import styles from './currency-cate.scss';
const CurrencyCate = ({ dispatch, currency, currentCurrency }) => {
  const selectCurrency = index => () => {
    dispatch(changeCurrencyName(index));
  };
  return (
    <div className={styles.currencyCateContainer}>
      <a
        rel="nofollow" className={styles.currencySelect}
        title={currency.find((value) => value.name === currentCurrency).currencySymbol}
        data-icon={currency.find((value) => value.name === currentCurrency).icon}
      >
        {currency.find((value) => value.name === currentCurrency).currencySymbol}</a>
      <div className={styles.currencyCate}>
        {currency.map((item) => (
          <a
            rel="nofollow"
            onClick={selectCurrency(item.name)}
            data-icon={item.icon}
            key={item.name}
          >
            {item.content}
          </a>
        ))}
      </div>
    </div>
);
};

CurrencyCate.propTypes = {
  currency:
    PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType(
          [PropTypes.string, PropTypes.number]
        )
      )
    ),
  currentCurrency: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ common_currency }) => ({
  currentCurrency: common_currency.currencyName,
  currency: common_currency.currency
});

export default connect(mapStateToProps)(CurrencyCate);
