/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  showUpper:true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case '<%= appnameUpper %>_INIT':
      return state;
    default:
      return state;
  }
};
