import React, { useState, useEffect } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import '../../../styles/components/sub/cartPage/carItem.css'
import { Link } from 'react-router-dom';

const CartItem = ({ item, cartItems, addToCart, isFirstItem, totalPrice, selectAll, onSelectItem, removeItem }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1); // 초기 수량을 받아옴
  const count = (type) => {
    let number = quantity;

    if (type === 'plus') {
      number++;
    } else if (type === 'minus' && number > 1) {
      number--;
    }

    setQuantity(number); // 수량 업데이트
  };

  const handleInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자 외 문자는 제거
    setQuantity(parseInt(value, 10) || 1); // 수량 업데이트
  };

  // 가격 포맷팅 함수
  const formattedPrice = (price, discountRate) => {
    if (discountRate > 0) {
      return Math.floor(price * (1 - discountRate / 100) * quantity).toLocaleString('ko-KR') + '원';
    } else {
      return (price * quantity).toLocaleString('ko-KR') + '원';
    }
  };

  //수량 변경 함수
  const handleUpdateCart = () => {
    addToCart(item, quantity);
    alert(`${item.name}의 수량이 ${quantity}개로 변경되었습니다.`);
  };

  //체크박스 함수
  const [isChecked, setIsChecked] = useState(false);

  // selectAll 상태 변화에 따라 체크박스 동기화
  useEffect(() => {
    setIsChecked(selectAll);
  }, [selectAll]);

  // 체크박스 상태 변경
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onSelectItem(item.id, checked); // 체크 상태 전달
  };
  
    // 개별 아이템 삭제 함수
    const handleDeleteItem = () => {
      if(window.confirm(`${item.name}을(를) 삭제하겠습니까?`)){
      removeItem(item.id); // 삭제 함수 호출
      alert(`${item.name}이(가) 삭제되었습니다.`);
      }
    };

  return (
    <tr>
      <td>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </td>
      <td>
        <div>
          <div className='table-image'>
            <Link to ={`/product/${item.id}`}>
              <img src={item.image} alt={item.name}/>
            </Link>
          </div>
        </div>
      </td>
      <td>
        <div>
          <Link to ={`/product/${item.id}`}>
            <span style={{fontWeight: 500}}>{item.name}</span>
          </Link>
        </div>
      </td>
      <td className='cart-item-td'>
        <div className='product-input'>
          <span>
            <button onClick={() => count('minus')} className='input-button'>
              <Dash />
            </button>
            <input
              type='text'
              value={quantity}
              onChange={handleInput}
              className='quantity-input'
            />
            <button onClick={() => count('plus')} className='input-button'>
              <Plus />
            </button>
          </span>
          <div className='cart-item-button'>
            <button onClick={handleUpdateCart} className='cartpage-button'>변경</button>
            <button onClick={handleDeleteItem} className='cartpage-button'>삭제</button>
          </div>
        </div>
      </td>
      <td>
        <div>
          {formattedPrice(item.price, item.discountRate)}
        </div>
      </td>
      <td>
        <div style={{color: 'var(--dark-gray)'}}>
          기본배송
        </div>
      </td>
      {isFirstItem && (
        <td rowSpan={cartItems.length}>
          <div>
          {totalPrice > 50000 ? "무료배송" : "2,500원"}
          </div>
        </td>
        )}
    </tr>
  );
};

export default CartItem;
