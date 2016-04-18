import { createStore, combineReducers } from 'redux';

import bestSeller from '../../components/best_seller';
import indexBanner from '../../components/index_banner';
import nav from '../../components/nav';
import topBanner from '../../components/top_banner';
import trending from '../../components/trending';
import mainHeader from '../../components/main_header';
import prompt from '../../components/prompt';

import './style.scss';

window.reduxState = createStore(combineReducers(
  Object.assign({

  },
    bestSeller,
    indexBanner,
    nav,
    topBanner,
    trending,
    mainHeader,
    prompt
  )
));
