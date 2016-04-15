import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Pic from './pic.jsx';

import styles from './inner-container.scss';


const Container = ({ images, pageIndex, pageWidth, totalWidth }) =>
  (
    <div
      className={ styles.innerContainer }
      style={{
        width: `${totalWidth}px`,
        transform: `translateX(-${pageIndex * pageWidth}px)`
      }}
    >
      <ul>
        {
          images.map((value) =>
            (
              <li>
                <Pic picinfo={ value } />
              </li>
            )
          )
        }
      </ul>
    </div>
  );

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  totalWidth: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageWidth: PropTypes.number.isRequired
};

const InnerContainer = connect()(Container);
export default InnerContainer;
