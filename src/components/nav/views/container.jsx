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
  function windowloadCallback() {
    function scrollListener() {
      if (upper.getBoundingClientRect().bottom <= 0) {
        requestAnimationFrame(() => dispatch(setLowerFix(true)));
      } else if (upper.getBoundingClientRect().bottom > 0) {
        requestAnimationFrame(() => dispatch(setLowerFix(false)));
      }
    }
    window.addEventListener('scroll', scrollListener, false);
  }
  window.addEventListener('load', windowloadCallback, false);
  return (
    <div className={styles.nav}>
      <div className={styles.upperHeader} ref={ node => { upper = upper || node; } }>
        <div className={styles.upperHeaderInner}>
          <a href="#" className={styles.logoLink} />
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
          Object.keys(categories).map((value, index0) => (
            <li key={index0}>
              <a href={categories[value].link}>{value}</a>
                {
                  !/^list\d+$/g.test(Object.keys(categories[value].children)[0]) ?
                    <div className={ styles.list }>
                      <ul className={styles.justIn}>
                      {
                        Object.keys(categories[value].children).map((child, index1) => (
                          <li key={ index1 }>
                            <a href={categories[value].children[child]}>
                              {child}
                            </a>
                          </li>
                        ))
                      }
                      </ul>
                    </div>
                    :
                    <div className={ classnames(styles.list, styles.multiUl) }>
                      {
                        Object.keys(categories[value].children).map((ul, indexul) => (
                          <ul key={indexul}>
                            {
                              Object.keys(categories[value].children[ul]).map((subkey, index2) => (
                                <li key={index2}>
                                  {
                                    categories[value].children[ul][subkey].isheader ? (
                                      <h1>
                                        <a href={categories[value].children[ul][subkey].link}>
                                          {subkey}
                                        </a>
                                      </h1>
                                    ) : (
                                      <a href={categories[value].children[ul][subkey].link}>
                                        {subkey}
                                      </a>
                                    )
                                  }
                                </li>
                              ))
                            }
                          </ul>
                        ))
                      }
                    </div>
                }
            </li>
          ))
        }
        {lowerFix ? <li className={styles.searchBarLi}><SearchBar /></li> : null}
        {lowerFix ? <li><ShoppingBag goodsNum={0} /></li> : null}
      </ul>
      </div>
      <div style={{ width: '100%', height: '1200px' }}></div>
    </div>
  );
};

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lowerFix: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired
};

const mapStateToProps = ({ nav }) => (
  {
    lowerFix: nav.lowerFix,
    categories: nav.categories,
    showPrompt: nav.showPrompt
  }
);
export default connect(mapStateToProps)(Container);
