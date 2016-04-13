import React from 'react';

import styles from './header-info.scss';

const HeaderInfo = () => {
  return (
      <div className={styles.headerInfo}>
        <ul>
          <li className={styles.freeShipping}>
              <a href="javascript:void(0);">
                <span className={styles.colored}>Free</span> Shipping Over $29
              </a>
          </li>
          <li className={styles.firstOrder}>
              <a href="#login_register.php">
                <span className={styles.colored}>20% OFF</span> Your First Order
              </a>
          </li>
        </ul>
        <div className={styles.popwindow}>
          <div className={styles.popwindowShadow}></div>
          <div className={styles.popwindowContent}>
              <img className={styles.popwindowClose} src="//statics.makemechic.com/image/em/delete_va04e357.png" />
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

export default HeaderInfo;
