/**
 * Created by fed on 16/4/14.
 */
import React, { PropTypes } from 'react';

import styles from './active-hint.scss';

const ActiveHint = ({ activeIndex, count, clickResponse }) => {
  const stateArr = [];
  for (let i = 0; i < count; i ++) {
    stateArr.push(activeIndex === i);
  }
  return (
    <div className={styles.activeHint} onClick={clickResponse}>
      {
        stateArr.map((state, index) =>
          <span className={styles.icon} key={index} data-index={index}>
            {state ? '\ue913' : '\ue914'}
          </span>
        )
      }
    </div>
  );
};

ActiveHint.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  clickResponse: PropTypes.func
};

export default ActiveHint;

