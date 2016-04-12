/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './container.scss';


const Container = ({ dispatch }) => {
  return (
    <div>
      hello
    </div>
  );
};

Container.propTypes = {
  
};


export default connect()(Container);
