import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './signIn.scss';


const Container = ({ dispatch,isLogin }) => {
    return (
        <div >
            <a className={styles.login} href="#">
            {
                isLogin?
                    <span>Signed</span>:
                    <span>Sign in<br /> or Registe</span>
            }
            </a>
        </div>
    );
};

Container.propTypes = {
    isLogin:React.PropTypes.bool.isRequired
};


const login= connect()(Container);
export default login;