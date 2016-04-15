/**
 * Created by fed on 16/4/8.
 */
import reducers from './data/reducers';
import currencyReducers from '../../common/state/currency/reducers';

export default {
  nav: reducers,
  common_currency: currencyReducers
};
