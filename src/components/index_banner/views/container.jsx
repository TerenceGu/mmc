/**
 * Created by fed on 16/4/14.
 */
import React from 'react';
import { connect } from 'react-redux';

import styles from './container.jsx';
import Slider from '../../../common/containers/slide/index.jsx';

const SlideWrapper = connect()(Slider);

const props = {
  width: 960,
  height: 555
};

const Wrapped = ({ list }) => (
  <SlideWrapper {...props}>
    {
      list.map(({ link, img }) => (
        <a href={link} className={styles.link} key={link}>
          <img src={img} {...props} />
        </a>
      ))
    }
  </SlideWrapper>
);

Wrapped.propTypes = {
  list: React.PropTypes.array
};

const mapStateToProps = ({ index_banner }) => ({
  list: index_banner.list
});


export default connect(mapStateToProps)(Wrapped);
