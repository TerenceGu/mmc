/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  showPrompt: false,
  imageLink: 'http://statics.makemechic.com/image/getoff_bg_v282b2ab.jpg'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PROMPT_INIT':
      return state;
    default:
      return state;
    case 'PROMPT_SHOW_PROMPT':
      return Object.assign({}, state, {
        showPrompt: action.flag
      });
  }
};
