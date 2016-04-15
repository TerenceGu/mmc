import React from 'react';
import styles from './trending-banner.scss';

const trendingBanners = [
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
];

const TrendingBanner = () => (
  <div className={styles.container}>
    {trendingBanners.map((item) =>
      (
        <a className={styles[item.id]} title={item.title} href={item.href} key={item.id}>
          <img src={item.img} />
        </a>
      )
    )}
  </div>
);

export default TrendingBanner;
