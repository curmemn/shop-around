import React from 'react'
import ShopHeader from '../components/sub/ShopHeader'
import ShopInfo from '../components/sub/ShopInfo'
import Title from '../components/common/Title'
import PromotionProduct from '../components/sub/productPage/PromotionProduct'
import ProductList from '../components/sub/productPage/ProductList'
import '../styles/pages/productPage.css'

const ProductPage = ({ addToRecentViewed }) => {
  return (
    <div className='product-page inner sub-inner'>
      <ShopInfo/>
      <div className='product-page-wrap sub-wrap'>
      <ShopHeader category={'전체보기'}/>
      <Title title={'전체 상품'} subTitle={'어라운드 상품을 둘러보세요.'}/>
      <PromotionProduct addToRecentViewed={addToRecentViewed}/>
      <ProductList addToRecentViewed={addToRecentViewed}/>
      </div>
    </div>
  )
}

export default ProductPage