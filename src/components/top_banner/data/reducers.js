/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  popUpVisible: false,
  headerLinks: [
    { type: 'popup', content: '<b>Free</b> Shipping Over $29', href: '#1' },
    { type: 'link', content: '<b>20% OFF</b> Your First Order', href: '#first order' }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOP_BANNER_INIT':
      return state;
    case 'TOP_BANNER_POPUP_VISIBILITY_CHANGE':
      return Object.assign({}, state, {
        popUpVisible: action.shouldShow
      });
    default:
      return state;
  }
};
