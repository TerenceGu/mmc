/**
 * Created by fed on 16/4/8.
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import SearchBar from './search-bar.jsx';
import Login from './signIn.jsx';
import ShoppingBag from './shoppingBag.jsx';

import {setLowerFix} from '../data/actions.js';

import styles from './container.scss';

const Container = ({ dispatch , lowerFix }) => {

  window.onload=function(){
      let lower=document.getElementsByClassName(styles.lowerHeader)[0];
      let upper=document.getElementsByClassName(styles.upperHeader)[0];
      function scrollListener(event){
          if(lower.getBoundingClientRect().top<=0
              &&upper.getBoundingClientRect().bottom<=0){
              dispatch(setLowerFix(false));
          }else if(upper.getBoundingClientRect().bottom>0){
              dispatch(setLowerFix(true));
          }
      }
      function deBounce(fun,timeout){
          let prev=Date.now();
          return function(){
              let now=Date.now();
              if(now-prev>=timeout){
                  prev=now;
                  fun.apply(this,arguments);
              }
          }
      }
      window.addEventListener("scroll",deBounce(scrollListener,0),false)
  };
  return (
    <div className={styles.nav}>
        <div className={styles.upperHeader}>
            <div className={styles.upperHeaderInner}>
                <a href="#"><img src="http://statics.makemechic.com/image/logo_v6571b05.png" /></a>
                <div className={styles.headerRight}>
                    <div className={styles.logoRight}>
                        <ShoppingBag goodsNum={0} />
                        <Login isLogin={false} />
                    </div>
                    <div style={{width:"325px"}}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
      <div className={!lowerFix?classnames(styles.lowerHeader,styles.fix):classnames(styles.lowerHeader)}>
        <ul>
          <li>
              <a href="#">JUST IN</a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#"> Dresses</a></li>
                      <li><a href="#">Top</a></li>
                      <li><a href="#">Hoodies & Sweatshirts</a></li>
                      <li><a href="#">Sweaters</a></li>
                      <li><a href="#">Outerwear</a></li>
                      <li><a href="#">Kimono</a></li>
                      <li><a href="#">Jumpsuits & Rompers</a></li>
                      <li><a href="#">Co-ordinates</a></li>
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Bottoms</a></li>
                      <li><a href="#">Swimwear</a></li>
                  </ul>
              </div>
          </li>
          <li>
              <a href="#">
                  CLOTHING
              </a>
                  <div className="list">
                      <ul className={styles.justIn}>
                          <li><a href="#"> Dresses</a></li>
                          <li><a href="#">Top</a></li>
                          <li><a href="#">Hoodies & Sweatshirts</a></li>
                          <li><a href="#">Sweaters</a></li>
                          <li><a href="#">Outerwear</a></li>
                          <li><a href="#">Kimono</a></li>
                          <li><a href="#">Jumpsuits & Rompers</a></li>
                          <li><a href="#">Co-ordinates</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">iuo raet</a></li>
                          <li><a href="#">Swimwear</a></li>
                      </ul>
                  </div>
          </li>
          <li>
              <a href="#">
                  DRESSES
              </a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#">Boho Dresses</a></li>
                      <li><a href="#">Casual Dresses</a></li>
                      <li><a href="#">Floral Dresses</a></li>
                      <li><a href="#">Maxl Dresses</a></li>
                      <li><a href="#">Party Dresses</a></li>
                      <li><a href="#">Bodycon Dresses</a></li>
                      <li><a href="#">Lace Dresses</a></li>
                      <li><a href="#">Backless Dresses</a></li>
                      <li><a href="#">MIDI Dresses</a></li>
                      <li><a href="#">CutOut Dresses</a></li>
                      <li><a href="#">Skater Dresses</a></li>
                  </ul>
              </div>
          </li>
          <li>
              <a href="#">
                  SHOES
              </a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#">High Heels</a></li>
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">Boots</a></li>
                      <li><a href="#">Wedges</a></li>
                      <li><a href="#">Flats</a></li>
                  </ul>
              </div>
          </li>
          <li>
              <a href="#">
                  OUTERWEAR
              </a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#">Coats</a></li>
                      <li><a href="#">Jackets</a></li>
                      <li><a href="#">Blazers</a></li>
                      <li><a href="#">Vests</a></li>
                  </ul>
              </div>
          </li>
          <li>
              <a href="#">
                  ACCESSORIES
              </a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#">Handbags</a></li>
                      <li><a href="#">Necklace</a></li>
                      <li><a href="#">Earrings & Sweatshirts</a></li>
                      <li><a href="#">Bracelets</a></li>
                      <li><a href="#">Rings</a></li>
                      <li><a href="#">Scaves</a></li>
                      <li><a href="#">Hats</a></li>
                      <li><a href="#">Belts</a></li>
                      <li><a href="#">Sunglasses</a></li>
                  </ul>
              </div>
          </li>
          <li>
              <a href="#">
                  SALE
              </a>
              <div className="list">
                  <ul className={styles.justIn}>
                      <li><a href="#">Dresses</a></li>
                      <li><a href="#">Top</a></li>
                      <li><a href="#">Hoodies & Sweatshirts</a></li>
                      <li><a href="#">Sweaters</a></li>
                      <li><a href="#">Outerwear</a></li>
                      <li><a href="#">Kimono</a></li>
                      <li><a href="#">Jumpsuits & Rompers</a></li>
                      <li><a href="#">Co-ordinates</a></li>
                      <li><a href="#">Shoes</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Bottoms</a></li>
                      <li><a href="#">Swimwear</a></li>
                  </ul>
              </div>
          </li>
          {!lowerFix? <li className={styles.searchBarLi}><SearchBar /></li>:null}
          {!lowerFix? <li><ShoppingBag goodsNum={0} /></li>:null}
        </ul>
      </div>
        <div style={{width:"100%",height:"1500px",clear:"both"}}></div>
    </div>
  );
};

Container.propTypes = {
    lowerFix:React.PropTypes.bool.isRequired
};

const mapStateToProps = ({ nav }) => (
{
    lowerFix: nav.lowerFix
}
);

export default connect(mapStateToProps)(Container);
