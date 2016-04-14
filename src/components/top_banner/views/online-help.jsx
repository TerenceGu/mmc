import React from 'react';
import styles from './online-help.scss';

const OnlineHelp = () => (
    <div className={styles.onlineHelp}>
      <a> Online Help </a>
      <div className={styles.liveChat}>
        <p><strong>Pre-sales</strong></p>
        <p>If you have any questions before making a purchase, chat with our online operaters
          to get more informations.</p>
        <div className={styles.chatLink}>
          <a><img src="https://makemechic.comm100.com/LiveChatServer/DBResource/DBImage.ashx?imgId=2&type=2&siteId=214771" /></a>
        </div>
        <p><strong>After-sales</strong></p>
        <p>Please log in to&nbsp;
          <strong>"MY ORDERS"</strong>&nbsp;
          to get your order status or other after-sales issues.</p>
        <a>Submit a ticket</a>
      </div>
    </div>
  );

export default OnlineHelp;
