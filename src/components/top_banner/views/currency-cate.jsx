import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../data/actions';
import styles from './currency-cate.scss';

const currency = [
  { content: 'US Dollar', currencySymbol: 'US$', icon: 0, name: 'USD', decimal: 2 },
  { content: 'Euro', currencySymbol: 'EUR€', icon: -11, name: 'EUR', decimal: 2 },
  { content: 'Pound Sterling', currencySymbol: 'GBP£', icon: -33, name: 'GBP', decimal: 2 },
  { content: 'Norwegian Krone', currencySymbol: 'N.Kr.', icon: -187, name: 'NOK', decimal: 2 },
  { content: 'Australian Dollar', currencySymbol: 'AU$', icon: -55, name: 'AUD', decimal: 2 },
  { content: 'Switzerland Francs', currencySymbol: 'CHF$', icon: -66, name: 'CHF', decimal: 2 },
  { content: 'Canadian Dollar', currencySymbol: 'CA$', icon: -44, name: 'CAD', decimal: 2 },
  { content: 'Swedish Krona', currencySymbol: 'S.Kr.', icon: -198, name: 'SEK', decimal: 2 },
  { content: 'Brazil Reais', currencySymbol: 'R$', icon: -253, name: 'BRL', decimal: 2 },
  { content: 'Polish Zloty', currencySymbol: 'zł', icon: -220, name: 'PLN', decimal: 2 },
  { content: 'Russian Ruble', currencySymbol: 'RUBp.', icon: -165, name: 'RUB', decimal: 0 },
  { content: 'Mexican Peso', currencySymbol: '$MXN', icon: -176, name: 'MXN', decimal: 2 },
  { content: 'Danish Krona', currencySymbol: 'D.Kr.', icon: -209, name: 'DKK', decimal: 2 },
  { content: 'Argentine Peso', currencySymbol: 'ARS$', icon: -242, name: 'ARS', decimal: 2 },
  { content: 'Saudi Arabian Riyal', currencySymbol: 'S.R.', icon: -231, name: 'SAR', decimal: 2 },
  { content: 'Japanese Yen', currencySymbol: 'JPY¥', icon: -22, name: 'JPY', decimal: 0 },
  { content: 'Hongkong Dollar', currencySymbol: 'HK$', icon: -77, name: 'HKD', decimal: 2 },
  { content: 'Singapore Dollar', currencySymbol: 'S$', icon: -264, name: 'SGD', decimal: 2 }
];

const CurrencyCate = ({ dispatch, currentCurrency }) => {
  const selectCurrency = index => () => {
    dispatch(changeCurrency(index));
  };

  return (
    <div className={styles.currencyCateContainer}>
      <a
        rel="nofollow" className={styles.currencySelect}
        title={currency[currentCurrency].currencySymbol}
        data-icon={currency[currentCurrency].icon}
      >
        {currency[currentCurrency].currencySymbol}</a>
      <div className={styles.currencyCate}>
        {currency.map((item, index) => (
          <a rel="nofollow" onClick={selectCurrency(index)} data-icon={item.icon} key={item.name}>
            {item.content}
          </a>
        ))}
      </div>
    </div>
);
};

CurrencyCate.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOf(['string', 'number']))),
  currentCurrency: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ top_banner }) => ({
  currentCurrency: top_banner.currencyIndex
});

export default connect(mapStateToProps)(CurrencyCate);
