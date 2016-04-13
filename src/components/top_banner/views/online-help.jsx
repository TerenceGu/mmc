import React from 'react';

import { connect } from 'react-redux';

//import { removeTodoItem } from '../actions';

import styles from './online-help.scss';

const OnlineHelp = ({ dispatch, currency }) => {
    return (
        <div className={styles.onlineHelp}>
            <a href="javascript:void(0)"> Online Help </a>
            <div className={styles.liveChat}>
                <p><strong>Pre-sales</strong></p>
                <p>If you have any questions before making a purchase, chat with our online operaters to get more informations.</p>
                <div className={styles.chatLink}>
                    <a href="#"><img src="https://makemechic.comm100.com/LiveChatServer/DBResource/DBImage.ashx?imgId=2&type=2&siteId=214771" /></a>
                </div>
                <p><strong>After-sales</strong></p>
                <p>Please log in to <strong>"MY ORDERS"</strong> to get your order status or other after-sales issues.</p>
                <a href="#">Submit a ticket</a>
            </div>
        </div>
    );
};

OnlineHelp.propTypes = {
  currency: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatch: React.PropTypes.func.isRequired
};

export default OnlineHelp;
