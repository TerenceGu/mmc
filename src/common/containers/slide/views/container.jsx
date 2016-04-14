/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ChildWrapper from './child-wrapper.jsx';
import ActiveHint from './active-hint.jsx';
import styles from './container.scss';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.width = this.props.width;
    this.height = this.props.height;
    this.count = React.Children.count(this.props.children);
    this.state = {
      currentActiveIndex: 0
    };
    setInterval(() => {
      this.nextPage();
    }, this.props.interval);
  }
  nextPage() {
    this.setState(({ currentActiveIndex }) => ({
      currentActiveIndex: currentActiveIndex === this.count - 1 ?
        0 : currentActiveIndex + 1
    }));
  }
  prevPage() {
    this.setState(({ currentActiveIndex }) => ({
      currentActiveIndex: currentActiveIndex === 0 ? this.count - 1 : currentActiveIndex - 1
    }));
  }
  gotoPage(e) {
    const src = e.target;
    this.setState({
      currentActiveIndex: Number(src.getAttribute('data-index'))
    });
  }
  render() {
    return (
      <div className={styles.box} style={{ width: this.width, height: this.height }} >
        <div className={styles.container} style={{ height: this.height,
         width: this.count * this.width,
         left: -this.state.currentActiveIndex * this.width }}
        >
          {React.Children.map(this.props.children, child => <ChildWrapper> {child} </ChildWrapper>)}
        </div>
        <div className={ styles.hint }>
          <ActiveHint count = {this.count} activeIndex = {this.state.currentActiveIndex}
            clickResponse = {e => this.gotoPage(e)}
          />
        </div>
        <input className={classnames(styles.btn, styles.nextPage)}
          onClick={() => this.nextPage()}
          type="button" value="&#xe911;"
        />
        <input className={classnames(styles.btn, styles.prevPage)}
          onClick={() => this.prevPage()}
          type="button" value="&#xe912;"
        />
      </div>
    );
  }
}


Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  width: PropTypes.number,
  height: PropTypes.number,
  interval: PropTypes.number
};

Container.defaultProps = {
  interval: 8000
};

export default Container;
