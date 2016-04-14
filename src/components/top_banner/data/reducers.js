/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  popUpVisible: false,
  currencyIndex: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOP_BANNER_INIT':
      return state;
    case 'TOP_BANNER_POPUP_VISIBILITY_CHANGE':
      return Object.assign({}, state, {
        popUpVisible: action.shouldShow
      });
    case 'TOP_BANNER_CURRENCY_CHANGE':
      return Object.assign({}, state, {
        currencyIndex: action.index
      });
    default:
      return state;
  }
};
