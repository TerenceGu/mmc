/**
 * Created by fed on 16/4/8.
 */
import React from 'react';
import styles from './container.scss';
import CurrencyCate from './currency-cate.jsx';
import HeaderInfo from './header-info.jsx';
import OnlineHelp from './online-help.jsx';

const Container = () => {
  return (
    <div className={styles.topBannerContainer}>
      <div className={styles.innerContainer}>
        <CurrencyCate className={styles.currencyCate} />
        <HeaderInfo className={styles.headerInfo} />
        <OnlineHelp className={styles.onlineHelp} />
      </div>
    </div>
  );
};

export default Container;
