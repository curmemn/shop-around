import React from 'react'
import ProductDetailCard from './ProductDetailCard';
import '../../styles/components/main/wideVisualProduct.css';

const WideVisualProduct = ({content, products, addToCart, addToRecentViewed}) => {
  return (
    <div className='wide-visual-wrap'>
      {content}
      <div className='item-area'>
        {products.map((product) => (
          <ProductDetailCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
        ))}
      </div>
    </div>
  )
}

export default WideVisualProduct