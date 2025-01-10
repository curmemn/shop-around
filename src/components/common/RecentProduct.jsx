import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/common/recentProduct.css'

const RecentProduct = ({recentViewed}) => {
  const recentViewedSlice = recentViewed.slice(0, 3);
  return (
    <div className='recent-product-wrap'>
      <h6>최근 본 상품</h6>
      {
        recentViewedSlice.length === 0 ? <span>최근 본 상품이 없습니다.</span> : (
          recentViewedSlice.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className='recent-product-item'>
              <div className='recent-product-image'>
              <img src={product.image} alt={product.name} />
              </div>
              <span>{product.name}</span>
            </Link>
          ))
        )
      }
      </div>
  )
}

export default RecentProduct