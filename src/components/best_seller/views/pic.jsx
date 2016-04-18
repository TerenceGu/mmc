/**
 * Created by Administrator on 2016/4/15 0015.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import styles from './pic.scss';

const Container = ({ picinfo, currentCurrency }) =>
  (
    <div className={ styles.pic }>
      <a href={ picinfo.link }>
        <LazyLoad height={292}>
          <img src={ picinfo.src } />
        </LazyLoad>
      </a>
      <a href={ picinfo.link }>
        <div className={ styles.disc }>
          { picinfo.disc }
        </div>
      </a>
      <div className={ styles.prices }>
        <div className={ styles.originalPrice }>
          { picinfo.originalPrice[currentCurrency] }
        </div>
        <div className={ styles.currentPrice }>
          { picinfo.currentPrice[currentCurrency] }
        </div>
      </div>
    </div>
  );

Container.propTypes = {
  picinfo: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired
};

const Pic = connect()(Container);
export default Pic;
