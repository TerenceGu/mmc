/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import ChildWrapper from './child-wrapper.jsx';
import styles from './container.scss';


const Container = ({ dispatch, children }) => {
  return (
    <div>
      {React.Children.map( child => <ChildWrapper> (child) </ChildWrapper>)}
      <input className={classnames(styles.btn, styles.nextPage)} type="button" value="&#xe911;"/>
      <input className={classnames(styles.btn, styles.prevPage)} type="button" value="&#xe912;"/>
    </div>
  );
};

Container.propTypes = {
  
};


export default connect()(Container);
