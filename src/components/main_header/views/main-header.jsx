import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeMainHeaderVisibility } from '../data/actions';
import styles from './main-header.scss';

const mainHeaderBanner = { src: 'https://img.makemechic.com/images/makemechic.com/1460537726632914195.jpg', href: '' };

const MainHeader = ({ dispatch, showHeader }) => {
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
  showHeader: PropTypes.bool.isRequired
};

const mapStateToProps = ({ main_header }) => ({
  showHeader: main_header.mainHeaderVisible
});

export default connect(mapStateToProps)(MainHeader);
