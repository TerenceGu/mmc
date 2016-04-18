import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeMainHeaderVisibility } from '../data/actions';
import styles from './main-header.scss';

const MainHeader = ({ dispatch, showHeader, mainHeaderBanner }) => {
  const hideHeader = () => {
    dispatch(changeMainHeaderVisibility(false));
  };

  return (
    <div className={styles.container} style={{ display: showHeader ? 'block' : 'none' }}>
      <a href={mainHeaderBanner.href} rel="nofollow" >
        <img src={mainHeaderBanner.src} />
      </a>
      <div className={styles.close} onClick={hideHeader}></div>
    </div>
  );
};

MainHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
  mainHeaderBanner: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = ({ main_header }) => ({
  showHeader: main_header.mainHeaderVisible,
  mainHeaderBanner: main_header.mainHeaderBanner
});

export default connect(mapStateToProps)(MainHeader);
