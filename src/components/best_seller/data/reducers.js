/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  pageInfo: {
    pageIndex: 0,
    pageWidth: 920,
    totalWidth: 2760
  },
  images: [
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: 'US$22.00',
      currentPrice: 'US$16.90'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: '',
      currentPrice: 'US$20.00'
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'BEST_SELLER_INIT':
      return Object.assign({}, state, action.value);
    case 'BEST_SELLER_PREVIOUS_PAGE':
      return Object.assign({}, state, {
        pageInfo: Object.assign({}, state.pageInfo, {
          pageIndex: state.pageInfo.pageIndex - 1
        })
      });
    case 'BEST_SELLER_NEXT_PAGE':
      return Object.assign({}, state, {
        pageInfo: Object.assign({}, state.pageInfo, {
          pageIndex: state.pageInfo.pageIndex + 1
        })
      });
    default:
      return state;
  }
};
