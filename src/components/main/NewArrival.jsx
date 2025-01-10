import React, { useContext } from 'react'
import Title from '../common/Title'
import ProductDetailCard from './ProductDetailCard'  
import '../../styles/components/main/newArrival.css'
import products from '../../data/products.json';
import { CartContext } from '../../context/CartContext'

const NewArrival = ({ addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  const SliceProducts = products.slice(0, 8);
  return (
    <section className='new-arrival-wrap inner'>
      <Title title={'New Arrival'} subTitle={'이번 주 새로 들어온 상품입니다.'}/>
      <div className='product-grid'>
      {SliceProducts.map((product) => (
          <ProductDetailCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
        ))}
      </div>
    </section>
  )
}

export default NewArrival