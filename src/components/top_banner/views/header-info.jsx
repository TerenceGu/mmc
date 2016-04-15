import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changePopupVisibility } from '../data/actions';
import styles from './header-info.scss';

const headerLinks = [
  { type: 'popup', content: '<b>Free</b> Shipping Over $29', href: '#1' },
  { type: 'link', content: '<b>20% OFF</b> Your First Order', href: '#first order' }
];

const HeaderInfo = ({ dispatch }) => {
  const showPopupWindow = e => {
    dispatch(changePopupVisibility(true));
    e.preventDefault();
  };

  const getContent = item => ({
    __html: item.content
  });

  return (
    <div className={styles.headerInfo}>
      <ul>
        {headerLinks.map((item) =>
          (
            (item.type === 'link')
              ? (
              <li key={item.href}>
                <a href={item.href} dangerouslySetInnerHTML={getContent(item)} />
              </li>)
              : (
              <li key={item.href}>
                <a onClick={showPopupWindow} dangerouslySetInnerHTML={getContent(item)} />
              </li>)
          )
        )}
      </ul>
    </div>
  );
};

HeaderInfo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(HeaderInfo);
