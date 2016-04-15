/**
 * Created by fed on 16/4/8.
 */
import React from 'react';
import styles from './container.scss';
import CurrencyCate from './currency-cate.jsx';
import HeaderInfo from './header-info.jsx';
import OnlineHelp from './online-help.jsx';
import Popup from './popup.jsx';

const Container = () => (
    <div className={styles.topBannerContainer}>
      <div className={styles.innerContainer}>
        <CurrencyCate />
        <OnlineHelp />
        <HeaderInfo />
        <Popup />
      </div>
    </div>
);

export default Container;
