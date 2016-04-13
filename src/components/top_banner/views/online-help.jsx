import React from 'react';

import { connect } from 'react-redux';

//import { removeTodoItem } from '../actions';

import styles from './online-help.scss';

const OnlineHelp = ({ dispatch, currency }) => {
    return (
        <div className={styles.onlineHelp}>
            <a href="javascript:void(0)"> Online Help </a>
        </div>
    );
};

OnlineHelp.propTypes = {
  currency: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.isRequired
};

export default OnlineHelp;
