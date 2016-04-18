/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setShowPrompt } from '../data/actions.js';

import styles from './container.scss';

const Container = ({ dispatch, showPrompt }) => {
  function timeoutCallback() {
    dispatch(setShowPrompt(true));
  }
  function hidePrompt() {
    dispatch(setShowPrompt(false));
  }
  function windowLoadCallback() {
    setTimeout(timeoutCallback, 5000);
  }
  window.addEventListener('load', windowLoadCallback, false);
  return (
    <div>
      {
        showPrompt ? (
          <div>
            <div className={styles.mask} onClick={hidePrompt}>
            </div>
            <div className={styles.prompt}>
              <div className={styles.promptContent}>
                <div className={styles.titles}>
                  <span className={styles.titleBig}>
                    <span className={styles.titleWordBig}>
                      20
                    </span>
                    <span className={styles.titleWordSmall}>% OFF</span>
                  </span>
                  <span className={styles.titleSmall}>
                    your first order
                  </span>
                </div>
                <div className={styles.desc}>
                  Register to receive our daily email and get 20% off your first order.
                  Be in the know about our new arrivals, amazing sales and deals,
                  features, lookbooks, and more.
                </div>
                <div className={styles.signup}>
                  <input type="text" placeholder="Your Email Address" />
                  <button>SIGN UP</button>
                  <div className={styles.alreadyAMember}>
                    Already a Member?<a href="#">Sign Sign in here</a>
                  </div>
                </div>
              </div>
              <button className={styles.promptCloseBtn} onClick={hidePrompt}>X</button>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showPrompt: PropTypes.bool.isRequired
};

const mapStateToProps = ({ prompt }) => (
  {
    showPrompt: prompt.showPrompt
  }
);

export default connect(mapStateToProps)(Container);
