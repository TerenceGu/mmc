/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  lowerFix:false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case '<%= appnameUpper %>_INIT':
      return state;
    case 'NAV_SET_LOWER_FIX':
      return Object.assign({},state,{
        lowerFix:action.flag
      });
    default:
      return state;
  }
};
