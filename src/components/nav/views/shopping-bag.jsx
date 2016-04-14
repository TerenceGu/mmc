import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './shopping-bag.scss';


const Container = ({ goodsNum, lowerFix }) => (
    <div className={!lowerFix ? classnames(styles.myBag, styles.border)
     : classnames(styles.myBag)}
    >
      <a href="#">
                <span className={styles.pic}>
                    {goodsNum}
                </span>
        <span className={styles.myBagWord}>My Bag</span>
      </a>
    </div>
);

Container.propTypes = {
  goodsNum: PropTypes.number.isRequired,
  lowerFix: PropTypes.bool.isRequired
};

const mapStateToProps = ({ nav }) => (
  {
    lowerFix: nav.lowerFix
  }
);
const ShoppingBag = connect(mapStateToProps)(Container);
export default ShoppingBag;
