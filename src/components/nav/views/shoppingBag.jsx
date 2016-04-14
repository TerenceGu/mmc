import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './shoppingBag.scss';


const Container = ({ dispatch ,goodsNum,lowerFix}) => {
    return (
        <div className={!lowerFix?classnames(styles.myBag,styles.border):classnames(styles.myBag)}>
            <a href="#">
                <span className={styles.pic}>
                    {goodsNum}
                </span>
                <span className={styles.myBagWord}>My Bag</span>
            </a>
        </div>
    );
};

Container.propTypes = {
    goodsNum:React.PropTypes.number.isRequired
};

const mapStateToProps = ({ nav }) => (
{
    lowerFix: nav.lowerFix
}
);
const ShoppingBag= connect(mapStateToProps)(Container);
export default ShoppingBag;