import React from 'react';
import TrendingBanner from './trending-banner.jsx';
import styles from './container.scss';

const Container = () =>
 (
    <div className={styles.trendingContainer}>
      <TrendingBanner />
    </div>
  );

export default Container;
