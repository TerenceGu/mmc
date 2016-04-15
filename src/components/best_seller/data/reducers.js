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
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
    },
    {
      src: 'http://img.makemechic.com/images/emmastyle.com/201512/1449221520361332223.jpg',
      link: '#',
      disc: 'Black Long Sleeve Kaftan Dress',
      originalPrice: {
        USD: 'US$25',
        EUR: 'EUR€44',
        GBP: 'GBP£29'
      },
      currentPrice: {
        USD: 'US$18',
        EUR: 'EUR€20',
        GBP: 'GBP£23'
      }
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
