import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './header-info.scss';
import { changePopupVisibility } from '../data/actions';

const HeaderInfo = ({ dispatch, showPopWindow }) => {
  const showPopupWindow = e => {
    dispatch(changePopupVisibility(true));
    e.preventDefault();
  };

  const closePopupWindow = e => {
    dispatch(changePopupVisibility(false));
    e.preventDefault();
  };

  return (
    <div className={styles.headerInfo}>
      <ul>
        <li className={styles.freeShipping}>
          <a onClick={showPopupWindow}>
            <span className={styles.colored}>Free</span> Shipping Over $29
          </a>
        </li>
        <li className={styles.firstOrder}>
          <a>
            <span className={styles.colored}>20% OFF</span> Your First Order
          </a>
        </li>
      </ul>
      <div className={styles.popwindow} style={{ display: showPopWindow ? 'block' : 'none' }}>
        <div className={styles.popwindowShadow} onClick={closePopupWindow}></div>
        <div className={styles.popwindowContent}>
          <img
            className={styles.popwindowClose}
            src="//statics.makemechic.com/image/em/delete_va04e357.png"
            onClick={closePopupWindow}
          />
          <p className={styles.freeshipOne}>Free Shipping Over $29 (US Only)</p>
          <p className={styles.freeshipTwo}>
            No code required, can be combined with other promos.</p>
          <div className={styles.iconContainer}>
            <img src="//statics.makemechic.com/image/em/usflag_v5b24232.png" />
          </div>
          <div className={styles.windowContent}>
            <p><strong>20%</strong> OFF YOUR FIRST ORDER</p>
            Delivered within 4-10 business days
          </div>
          <p className={styles.newsletterSignup}>
            Sign up for our newsletter and receive 20% off your first order <br />
            Be the first to know about our new arrivals, amazing <br />
            sales, and exclusive deals.
          </p>
          <a className={styles.shippingPolicy} href="#shippingInfo">
            View Your Shipping Policy</a>
        </div>
      </div>
    </div>
  );
};

HeaderInfo.propTypes = {
  showPopWindow: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ top_banner }) => ({
  showPopWindow: top_banner.popUpVisible
});

export default connect(mapStateToProps)(HeaderInfo);
