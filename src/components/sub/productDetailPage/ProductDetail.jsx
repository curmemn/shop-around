import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../context/LoginContext';
import { ExclamationSquare, Dash, Plus } from 'react-bootstrap-icons';
import '../../../styles/components/sub/ProductDetailPage/productDetail.css';

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('장바구니에 추가되었습니다.');
  };

  const count = (type) => {
    let newQuantity = quantity;

    if (type === 'plus') {
      newQuantity++;
    } else if (type === 'minus' && quantity > 1) {
      newQuantity--;
    }

    setQuantity(newQuantity);
  };

  const handleInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    setQuantity(value ? parseInt(value, 10) : 1);
  };

  const formattedPrice = (price, discountRate) => {
    if (discountRate > 0) {
      return Math.floor(price * (1 - discountRate / 100)).toLocaleString('ko-KR') + '원';
    }
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <div className='product-detail-wrap'>
      <div className='product-detail-image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-detail-box'>
        <table>
          <tbody>
            <tr>
              <th>상품명</th>
              <td style={{fontSize: "100%"}}>{product.name}</td>
            </tr>
            <tr>
              <th>상품요약정보</th>
              <td>{product.desc}</td>
            </tr>
            {product.discountRate > 0 && (
              <tr>
                <th>소비자가</th>
                <td style={{ textDecoration: 'line-through', color: 'var(--dark-gray)'}}>
                  {product.price.toLocaleString('ko-KR')}원
                </td>
              </tr>
            )}
            <tr>
              <th style={{fontSize: "100%", fontWeight: 600}}>판매가</th>
              <td style={{ fontSize: "100%", fontWeight: 600 }}>
                {formattedPrice(product.price, product.discountRate)}
                {product.discountRate > 0 ? (<span style={{marginLeft:"0.8em", color: "var(--red)"}}>{product.discountRate}%</span>) : ''}
              </td>
            </tr>
            <tr>
              <th>배송정보</th>
              <td>국내배송 / 택배</td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>2,500원 (50,000원 이상 구매 시 무료)</td>
            </tr>
          </tbody>
        </table>

        <div className='select-area'>
          <p>
            <ExclamationSquare /> 수량을 선택해주세요.
          </p>
          <div className='product-input'>
            <span className='product-input-name'>{product.name}</span>
            <span className='quantity-wrap'>
              <button
                onClick={() => count('minus')}
                className='input-button'
              >
                <Dash />
              </button>
              <input
                type='text'
                value={quantity}
                onChange={handleInput}
                className='quantity-input'
              />
              <button
                onClick={() => count('plus')}
                className='input-button'
              >
                <Plus />
              </button>
            </span>
            <span className='calc-price'>
              {formattedPrice(product.price * quantity, product.discountRate)}
            </span>
          </div>
          <div className='product-total-count'>
            <span>
              <span>총 상품금액(수량): </span>
              <span className='calc-price' style={{fontSize: '22px', fontWeight: 600}}>
                {formattedPrice(product.price * quantity, product.discountRate)}
              </span>
              <span>({quantity}개)</span>
            </span>
          </div>
        </div>

        <div className='product-detail-button'>
          <button className='buy-button'
          onClick={() => {
          if (isLoggedIn) {
            alert('구매가 완료되었습니다.');
          } else {
            alert('로그인이 필요합니다.');
            navigate('/login');
          }
        }}>바로 구매하기</button>
          <button
            className='add-cart-button'
            onClick={handleAddToCart}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
