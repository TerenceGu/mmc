import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './shoppingBag.scss';


const Container = ({ dispatch ,goodsNum}) => {
    return (
        <div className={styles.myBag}>
            <a href="#">
                <span className={styles.pic}>{goodsNum}</span>
                <span className={styles.myBagWord}>My Bag</span>
            </a>
        </div>
    );
};

Container.propTypes = {
    goodsNum:React.PropTypes.number.isRequired
};


const ShoppingBag= connect()(Container);
export default ShoppingBag;