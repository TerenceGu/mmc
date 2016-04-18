/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  showPrompt: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case '<%= appnameUpper %>_INIT':
      return state;
    default:
      return state;
    case 'PROMPT_SHOW_PROMPT':
      return Object.assign({}, state, {
        showPrompt: action.flag
      });
  }
};
