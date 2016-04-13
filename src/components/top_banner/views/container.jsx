/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './container.scss';


import CurrencyCate from './currency-cate.jsx';
import HeaderInfo from './header-info.jsx';
import OnlineHelp from './online-help.jsx';

const Container = ({ dispatch }) => {
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

Container.propTypes = {
  
};


export default connect()(Container);
