/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import SearchBar from './search-bar.jsx';
import Login from './sign-in.jsx';
import ShoppingBag from './shopping-bag.jsx';

import { setLowerFix } from '../data/actions.js';

import styles from './container.scss';

const Container = ({ dispatch, lowerFix, categories }) => {
  let lower;
  let upper;
  window.onload = function () {
    function scrollListener() {
      if (lower.getBoundingClientRect().top <= 0
        && upper.getBoundingClientRect().bottom <= 0) {
        requestAnimationFrame(() => dispatch(setLowerFix(true)));
      } else if (upper.getBoundingClientRect().bottom > 0) {
        requestAnimationFrame(() => dispatch(setLowerFix(false)));
      }
    }
    window.addEventListener('scroll', scrollListener, false);
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
        {lowerFix ? <li><ShoppingBag goodsNum={0} /></li> : null}
      </ul>
      </div>
    </div>
  );
};

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lowerFix: PropTypes.bool.isRequired,
  categories: PropTypes.bool.isRequired
};

const mapStateToProps = ({ nav }) => (
  {
    lowerFix: nav.lowerFix,
    categories: nav.categories
  }
);
export default connect(mapStateToProps)(Container);
