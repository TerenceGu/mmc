/**
 * Created by Administrator on 2016/4/15 0015.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './pic.scss';

const Container = ({ picinfo }) =>
  (
    <div className={ styles.pic }>
      <a href={ picinfo.link }>
        <img src={ picinfo.src } />
      </a>
      <a href={ picinfo.link }>
        <div className={ styles.disc }>
          { picinfo.disc }
        </div>
      </a>
      <div className={ styles.prices }>
        <div className={ styles.originalPrice }>
          { picinfo.originalPrice }
        </div>
        <div className={ styles.currentPrice }>
          { picinfo.currentPrice }
        </div>
      </div>
    </div>
  );

Container.propTypes = {
  picinfo: PropTypes.object.isRequired
};

const Pic = connect()(Container);
export default Pic;
