import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../data/actions';
import styles from './currency-cate.scss';

const currency = [
  { content: 'US Dollar', currencySymbol: 'US$', icon: '' },
  { content: 'Euro', currencySymbol: 'EUR€', icon: '' }
];

const CurrencyCate = ({ dispatch, currentCurrency }) => {
  const selectCurrency = index => () => {
    dispatch(changeCurrency(index));
  };

  return (
    <div className={styles.currencyCateContainer}>
      <a rel="nofollow" className={styles.currencySelect} title="US$"
        atr1="USD"
      >
        {currency[currentCurrency].currencySymbol}</a>
      <div className={styles.currencyCate}>
        {currency.map((item, index) => (
          <a rel="nofollow" onClick={selectCurrency(index)} data-icon={item.icon}>
            {item.content}
          </a>
        ))}
      </div>
    </div>
  );
};

CurrencyCate.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  currentCurrency: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ top_banner }) => ({
  currentCurrency: top_banner.currencyIndex
});

export default connect(mapStateToProps)(CurrencyCate);
