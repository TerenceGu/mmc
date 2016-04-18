const defaultState = {
  emailValidity: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBSCRIBE_INIT':
      return state;
    case 'SUBSCRIBE_EMAIL_VERIFICATION':
      return Object.assign({}, state, {
        emailValidity: action.validity
      });
    default:
      return state;
  }
};
