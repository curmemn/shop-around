import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import '../../styles/components/main/productDetailCard.css';


const ProductDetailCard = ({product, addToCart, addToRecentViewed}) => {
  const {id, name, desc, price, discountRate, isNew, isBest, image} = product;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    alert('장바구니에 추가되었습니다.');
  };

  return (
    <Link to={`/product/${id}`} className='product-detail-card' onClick={() => addToRecentViewed(product)}>
      <div className="detail-image">
        <img src={image} alt={name} />
        <button className='cart-button'
        onClick={handleAddToCart}><Cart3/></button>
      </div>
      <div className='product-text'>
      <span className='product-name'>{name}</span>
      <span className='product-desc'>{desc}</span>
      <div className='product-price'>
        <span className={discountRate > 0 ? 'original-price discounted' : 'original-price'}>{price.toLocaleString('ko-KR')}원</span>
        {discountRate > 0 ? <span className='discounted-price'>{Math.floor(price * (1 - discountRate / 100)).toLocaleString('ko-KR')}원</span> : ''}
        {discountRate > 0 ? <span className='discount-rate'>{discountRate}%</span> : ''}
      </div>
      <div className='product-tag'>
      <span className='best-tag'>{isBest ? '인기' : ''}</span>
      <span className='new-tag'>{isNew ? '신규' : ''}</span>
      </div>
    </div>
    </Link>
  )
}

export default ProductDetailCard