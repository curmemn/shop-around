import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { LoginContext } from '../../../context/LoginContext'
import '../../../styles/components/sub/cartPage/cartList.css'

const CartList = ({ cartItems, addToCart, removeItem, clearCart }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  
  //배송비 테이블로 전달할 총액 계산
  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const price = item.price * (1 - item.discountRate / 100); // 할인 적용
      return total + price * item.quantity; // 수량 반영 후 합계 계산
    }, 0);
  };
  const totalPrice = calculateTotalPrice(cartItems);


  // 체크박스 관련 함수 (체크된 상품만 총액 계산)
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // 체크박스 토글
  const handleSelectToggle = () => {
    setSelectAll((prev) => !prev);

    if (!selectAll) {
      // 모두 선택
      setSelectedItems(cartItems.map((item) => item.id));
    } else {
      // 모두 해제
      setSelectedItems([]);
    }
  };

  // 전체 선택
  const handleSelectAll = () => {
    setSelectAll(true);
    setSelectedItems(cartItems.map((item) => item.id)); // 모든 ID를 추가
  };

  // 전체 해제
  const handleDeselectAll = () => {
    setSelectAll(false);
    setSelectedItems([]); // 선택 목록 비우기
  };


  // 체크 상태 업데이트
  const handleSelectItem = (id, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  // 총액 계산
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id)) // 선택된 아이템만 필터링
      .reduce((sum, item) => {
        if (item.discountRate > 0) {
          return sum + (item.price * (1 - item.discountRate / 100)) * item.quantity;
        } else {
          return sum + item.price * item.quantity;
        }
      }, 0); // 초기값 0
  };


  return (
    <div>
      <table className='cart-table'>
      <thead>
        <tr>
          <th>
            <div>
            <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectToggle}
            />
            </div>
          </th>
          <th style={{width: '110px'}}>이미지</th>
          <th>상품정보</th>
          <th>수량</th>
          <th>상품구매금액</th>
          <th>배송구분</th>
          <th  style={{width: "130px"}}>배송비</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <CartItem
          key={item.id}
          item={item}
          isFirstItem={index === 0}
          cartItems={cartItems}
          addToCart={addToCart}
          totalPrice={totalPrice}
          selectAll={selectAll}
          onSelectItem={handleSelectItem}
          removeItem={removeItem}
          />
        ))}
      </tbody>
      </table>
      <div className='handle-button-wrap'>
        <button className='cartpage-button' onClick={handleSelectAll}>전체선택</button>
        <button className='cartpage-button'onClick={handleDeselectAll}>전체해제</button>
        <button className='cartpage-button'onClick={clearCart}>장바구니 비우기</button>
      </div>
      <table className='cart-total-price'>
        <thead>
          <tr>
            <th style={{width: '30%'}}>총 상품금액</th>
            <th style={{width: '20%'}}>총 배송비</th>
            <th style={{width: '50%'}}>결제 예정 금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{calculateTotal().toLocaleString('ko-KR')}원</td>
            <td>+{calculateTotal() > 50000 ? 0 : '2,500'}원</td>
            <td>={calculateTotal() > 50000 ? calculateTotal().toLocaleString('ko-KR') : (calculateTotal() + 2500).toLocaleString('ko-KR')}원</td>
          </tr>
        </tbody>
      </table>
      <div className='purchase-wrap'>
        <button className='purchase-button' onClick={() => {
          if (isLoggedIn) {
            if(selectedItems.length > 0) {
            alert('구매가 완료되었습니다.');
            } else {
              alert('상품을 선택해주세요.');
            }
          } else {
            alert('로그인이 필요합니다.');
            navigate('/login');
          }
        }}>구매하기</button>
      </div>
    </div>
  )
}

export default CartList