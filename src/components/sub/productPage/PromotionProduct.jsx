import React, { useContext } from 'react'
import ProductDetailCard from '../../main/ProductDetailCard'
import { CartContext } from '../../../context/CartContext'
import products from '../../../data/products.json';
import '../../../styles/components/sub/productPage/promotionProduct.css'

const PromotionProduct = ({ addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  const SliceProducts = products.slice(0, 3);
  return (
    <div className='promotion-product-wrap'>
      <div className='product-grid gd3'>
      {SliceProducts.map((product) => (
        <ProductDetailCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
      ))}
      </div>
    </div>
  )
}

export default PromotionProduct
