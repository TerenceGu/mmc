import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { verifyEmail } from '../data/actions';
import styles from './container.scss';


const Container = ({ dispatch, validEmail }) => {
  const submitEmail = () => (
    dispatch(verifyEmail(1))
  );
  return (
    <div className={styles.container}>
      <h2> SIGN UP FOR SPECIAL ROMOTIONS </h2>
      <input type="text" placeholder="Enter email address" />
      <input type="button" value="Subscribe" onClick={submitEmail} />
      <div style={{ display: (validEmail === 1) ? 'block' : 'none' }}>
        Oops! It looks like you entered an invalid email address.</div>
      <div style={{ display: (validEmail === 2) ? 'block' : 'none' }}>
        Thank you for subscribing! Enjoy shopping at MakeMeChic.com.</div>
      <div style={{ display: (validEmail === 3) ? 'block' : 'none' }}>
        Deja Vu! This email address has already been registered.</div>
    </div>
  );
};

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  validEmail: PropTypes.number.isRequired
};

const mapStateToProps = ({ subscribe }) => (
  {
    validEmail: subscribe.emailValidity
  }
);

export default connect(mapStateToProps)(Container);
