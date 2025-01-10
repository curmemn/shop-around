import React, { useState, useContext } from 'react'
import Title from '../common/Title';
import ProductSquareCard from './ProductSquareCard';
import '../../styles/components/main/popularCategory.css'
import products from '../../data/products.json'
import { CartContext } from '../../context/CartContext'

const PopularCategory = ({ addToRecentViewed}) => {
  const { addToCart } = useContext(CartContext);
  const [actvieTab, setActiveTab] = useState('침실');
  const categories = ['침실', '홈데코'];
  const filteredProducts = products.filter((product) => product.category === actvieTab);
  return (
    <section className='popular-category-wrap inner'>
      <Title title={'인기 카테고리'} subTitle={'현재 인기있는 카테고리 상품을 만나보세요!'}/>
      <div className='tab-menu'>
        {categories.map((category) => {
          return(
            <button key={category} className={`tab-button ${actvieTab === category ? 'active' : ''}`} onClick={() => setActiveTab(category)}>{category}</button>
          )
        })}
      </div>
      <div className='popular-products'>
        {filteredProducts.map((product) => (
        <ProductSquareCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
        ))}
      </div>
    </section>
  )
}

export default PopularCategory