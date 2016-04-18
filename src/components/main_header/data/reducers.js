const defaultState = {
  mainHeaderVisible: true,
  mainHeaderBanner: { src: 'https://img.makemechic.com/images/makemechic.com/1460537726632914195.jpg', href: '' }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MAIN_HEADER_INIT':
      return state;
    case 'MAIN_HEADER_VISIBILITY_CHANGE':
      return Object.assign({}, state, {
        mainHeaderVisible: action.shouldShow
      });
    default:
      return state;
  }
};
