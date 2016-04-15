import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changePopupVisibility } from '../data/actions';
import styles from './popup.scss';

const Popup = ({ dispatch, showPopWindow }) => {
  const closePopupWindow = e => {
    dispatch(changePopupVisibility(false));
    e.preventDefault();
  };

  return (
    <div className={styles.popwindow} style={{ display: showPopWindow ? 'block' : 'none' }}>
      <div className={styles.popwindowShadow} onClick={closePopupWindow}></div>
      <div className={styles.popwindowContent}>
        <span
          className={styles.popwindowClose}
          onClick={closePopupWindow}
        />
        <p className={styles.freeshipOne}>Free Shipping Over $29 (US Only)</p>
        <p className={styles.freeshipTwo}>
          No code required, can be combined with other promos.</p>
        <div className={styles.iconContainer}>
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
  );
};

Popup.propTypes = {
  showPopWindow: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ top_banner }) => ({
  showPopWindow: top_banner.popUpVisible
});

export default connect(mapStateToProps)(Popup);
