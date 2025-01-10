import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import { CartContext } from '../context/CartContext';
import ShopInfo from '../components/sub/ShopInfo'
import ShopHeader from '../components/sub/ShopHeader'
import Title from '../components/common/Title';
import CartList from '../components/sub/cartPage/CartList';
import BestProduct from '../components/main/BestProduct';
import '../styles/pages/cartPage.css'

const CartPage = ({ addToRecentViewed }) => {
  const { cartItems, addToCart ,removeItem, clearCart } = useContext(CartContext);
  
  return (
    <div className='cart-page inner sub-inner'>
      <ShopInfo/>
      <div className='cart-page-wrap sub-wrap'>
      <ShopHeader category={'장바구니'}/>
      <Title title={'장바구니'} subTitle={'구매할 상품을 선택하세요.'}></Title>
      {cartItems.length === 0 ?
      (
        <div className='empty-cart'>
          <h1>장바구니가 비었습니다.</h1>
          <Link to='/product'><button className='more-button'>상품 보러가기<ArrowRight/></button></Link>
        </div>
      ):
      (
        <CartList cartItems={cartItems} addToCart={addToCart} removeItem={removeItem} clearCart={clearCart} />
      )}
      <BestProduct addToRecentViewed={addToRecentViewed}/>
      </div>
    </div>
  )
}

export default CartPage