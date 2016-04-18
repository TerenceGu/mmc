import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changePopupVisibility } from '../data/actions';
import styles from './header-info.scss';

const HeaderInfo = ({ dispatch, headerLinks }) => {
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
  dispatch: PropTypes.func.isRequired,
  headerLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

const mapStateToProps = ({ top_banner }) => ({
  headerLinks: top_banner.headerLinks
});

export default connect(mapStateToProps)(HeaderInfo);
