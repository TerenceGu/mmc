/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  list: [{
    link: '#',
    img: 'http://img.makemechic.com/images/makemechic.com/1460426412651850371.jpg'
  },
    {
      link: '',
      img: 'http://img.makemechic.com/images/makemechic.com/1460426206764472139.jpg'
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INDEX_BANNER_INIT':
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};
