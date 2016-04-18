/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import InnerContainer from './inner-container.jsx';
import { toNextPage, toPreviousPage } from '../data/actions.js';

import styles from './container.scss';


const Container = ({ dispatch, images, currentCurrency, pageInfo }) => {
  const count = Math.ceil(pageInfo.totalWidth / pageInfo.pageWidth);

  function leftArrowClick() {
    dispatch(toPreviousPage());
  }
  function rightArrowClick() {
    dispatch(toNextPage());
  }
  return (
    <div className={styles.outermost}>
      <div className={styles.bestSellerOuter}>
        <InnerContainer
          currentCurrency={currentCurrency}
          totalWidth={pageInfo.totalWidth}
          pageWidth={pageInfo.pageWidth}
          images={images}
          pageIndex= {pageInfo.pageIndex}
        />
      </div>
      {
        pageInfo.pageIndex !== 0 ? (
          <input
            className={ classnames(styles.btn, styles.leftArrow) }
            type="button" value="&#xe912;"
            onClick = { leftArrowClick }
          />
        ) : null
      }
      {
        pageInfo.pageIndex !== count - 1 ? (
          <input
            className={ classnames(styles.btn, styles.rightArrow) }
            type="button" value="&#xe911;"
            onClick = { rightArrowClick }
          />
        ) : null
      }
    </div>
  );
};

Container.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  pageInfo: PropTypes.object.isRequired
};

const mapStateToProps = ({ best_seller, common_currency }) => (
  {
    currentCurrency: common_currency.currencyName,
    pageInfo: best_seller.pageInfo,
    images: best_seller.images
  }
);

export default connect(mapStateToProps)(Container);
