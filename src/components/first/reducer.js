/**
 * Created by fed on 16/4/6.
 */
export default (state = 0, action) => {
  switch (action.type) {
    case 'FIRST_INIT':
      return action.value.text;
    case 'FIRST_TEXT_ONCLICK':
      return state + 1;
    default:
      return state;
  }
};
