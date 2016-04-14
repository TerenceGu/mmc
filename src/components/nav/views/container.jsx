/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import SearchBar from './search-bar.jsx';
import Login from './signIn.jsx';
import ShoppingBag from './shoppingBag.jsx';

import { setLowerFix } from '../data/actions.js';

import styles from './container.scss';

const Container = ({ dispatch, lowerFix, categories }) => {
  let lower;
  let upper;
  window.onload = function () {
    function scrollListener() {
      if (lower.getBoundingClientRect().top <= 0
        && upper.getBoundingClientRect().bottom <= 0) {
        dispatch(setLowerFix(true));
      } else if (upper.getBoundingClientRect().bottom > 0) {
        dispatch(setLowerFix(false));
      }
    }

    function deBounce(fun, timeout) {
      let prev = Date.now();
      return function (...args) {
        const now = Date.now();
        if (Date.now() - prev >= timeout) {
          prev = now;
          fun.apply(this, args);
        }
      };
    }

    window.addEventListener('scroll', deBounce(scrollListener, 0), false);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.upperHeader} ref={ node => { upper = upper || node; } }>
        <div className={styles.upperHeaderInner}>
          <a href="#"><img src="http://statics.makemechic.com/image/logo_v6571b05.png" /></a>
          <div className={styles.headerRight}>
            <div className={styles.logoRight}>
              <ShoppingBag goodsNum={0} />
              <Login isLogin={false} />
            </div>
            <div style={{ width: 325 }}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <div className={lowerFix ? classnames(styles.lowerHeader, styles.fix) :
      classnames(styles.lowerHeader)} ref={ node => { lower = lower || node; } }
      >
      <ul>
        {
          Object.keys(categories).map(value => (
            <li>
              <a href={categories[value].link}>{value}</a>
              <div className={ styles.list }>
                <ul className={styles.justIn}>
                  {
                    Object.keys(categories[value].children).map(child => (
                      <li><a href={categories[value].children[child]}>{child}</a></li>
                    ))
                  }
                </ul>
              </div>
            </li>
          ))
        }
        {lowerFix ? <li className={styles.searchBarLi}><SearchBar /></li> : null}
        {lowerFix ? <li><ShoppingBag goodsNum={0}/></li> : null}
      </ul>
      </div>
      <div style={{ width: '100%', height: '1500px', clear: 'both' }}></div>
    </div>
  );
};

Container.propTypes = {
  lowerFix: React.PropTypes.bool.isRequired,
  categories: React.PropTypes.bool.isRequired
};

const mapStateToProps = ({ nav }) => (
{
  lowerFix: nav.lowerFix,
  categories: nav.categories
}
);

export default connect(mapStateToProps)(Container);
