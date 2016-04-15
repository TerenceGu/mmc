import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Pic from './pic.jsx';

import styles from './inner-container.scss';


const Container = ({ images, pageIndex, pageWidth, totalWidth, currentCurrency }) =>
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
          images.map((value, index) =>
            (
              <li key={ index }>
                <Pic currentCurrency={ currentCurrency } picinfo={ value } />
              </li>
            )
          )
        }
      </ul>
    </div>
  );

Container.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  totalWidth: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageWidth: PropTypes.number.isRequired
};

const InnerContainer = connect()(Container);
export default InnerContainer;
