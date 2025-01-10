import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ShopHeader from '../components/sub/ShopHeader'
import ShopInfo from '../components/sub/ShopInfo'
import products from '../data/products.json'
import ProductDetail from '../components/sub/productDetailPage/ProductDetail'
import { CartContext } from '../context/CartContext'

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const productIndex = parseInt(productId, 10) - 1;
  const product = products[productIndex];
  
  if(!product){
    return(
      <div className='product-detail-page inner sub-inner'>
      <ShopInfo/>
      <div className='detail-page-wrap sub-wrap'>
        <h1>NOT FOUND</h1>
      </div>
    </div>
    )
  }
  
  return (
    <div className='product-detail-page inner sub-inner'>
      <ShopInfo/>
      <div className='detail-page-wrap sub-wrap'>
      <ShopHeader category={product.category}/>
      <ProductDetail product={product} addToCart={addToCart}/>
      </div>
    </div>
  )
}

export default ProductDetailPage