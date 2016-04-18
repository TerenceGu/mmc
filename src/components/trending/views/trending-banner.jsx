import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Lazyload from 'react-lazyload';
import styles from './trending-banner.scss';


const TrendingBanner = ({ trendingBanners }) => (
  <div className={styles.container}>
    {trendingBanners.map((item) =>
      (
        <a className={styles[item.id]} title={item.title} href={item.href} key={item.id}>
          <Lazyload height={650}>
            <img src={item.img} />
          </Lazyload>
        </a>
      )
    )}
  </div>
);

TrendingBanner.propTypes = {
  trendingBanners: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

const mapStateToProps = ({ trending }) => ({
  trendingBanners: trending.trendingBanners
});

export default connect(mapStateToProps)(TrendingBanner);
