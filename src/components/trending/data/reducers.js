/**
 * Created by fed on 16/4/8.
 */
const defaultState = {
  trendingBanners: [
    {
      id: 'banner0',
      title: 'Shop Bodysuits',
      href: '#Shop Bodysuits',
      img: 'http://img.makemechic.com/images/makemechic.com/1460426271542029914.jpg'
    },
    {
      id: 'banner1',
      title: 'Complete your OOTD with Cute Accessories',
      href: '#Complete your OOTD with Cute Accessories',
      img: 'http://img.makemechic.com/images/makemechic.com/1460426621913572989.jpg'
    },
    {
      id: 'banner2',
      title: 'Shop Trendy Heels',
      href: '#Shop Trendy Heels',
      img: 'http://img.makemechic.com/images/makemechic.com/1460426708098425704.jpg'
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TRENDING_INIT':
      return state;
    default:
      return state;
  }
};
