/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './search-bar.scss';

import classnames from 'classnames';

const Container = ({ lowerFix }) =>
  <div className={lowerFix ?
  classnames(styles.searchBar, styles.narrow) : classnames(styles.searchBar)}
  >
    <input type="text" placeholder="Search MakeMeChic" />
    <input type="button" />
  </div>;
Container.propTypes = {
  lowerFix: PropTypes.bool.isRequired
};

const mapStateToProps = ({ nav }) => (
  {
    lowerFix: nav.lowerFix
  }
);
const SearchBar = connect(mapStateToProps)(Container);
export default SearchBar;
