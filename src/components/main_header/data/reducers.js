const defaultState = {
  mainHeaderVisible: true
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
