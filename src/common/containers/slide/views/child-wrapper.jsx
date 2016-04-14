/**
 * Created by fed on 16/4/13.
 */
import React, { PropTypes } from 'react';

import styles from './child-wrapper.scss';

const ChildWrapper = ({ children }) => (
  <div className={styles.childWrapper}>
    {children}
  </div>
);

ChildWrapper.propTypes = {
  children: PropTypes.any
};

export default ChildWrapper;
