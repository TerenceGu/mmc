/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './search-bar.scss';


const Container = ({ dispatch,className }) => {
    return (
        <div className={styles.searchBar}>
            <input type="text" className={className} placeholder="Search MakeMeChic" />
            <input type="button" />
        </div>
    );
};

Container.propTypes = {
    className:React.PropTypes.number.isRequired
};


const SearchBar= connect()(Container);
export default SearchBar;
