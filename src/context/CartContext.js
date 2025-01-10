import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, newQuantity) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((item) => item.id === product.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity = newQuantity; // 새로운 수량으로 업데이트
        return updatedCart;
      }
      return [...prev, { ...product, quantity: newQuantity }];
    });
  };
  console.log(cartItems); 
  
  // 개별 아이템 삭제 함수
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 장바구니를 빈 배열로 업데이트
  const clearCart = () => {
    if(window.confirm('장바구니를 비우시겠습니까?')){
      setCartItems([]);
      alert('장바구니를 비웠습니다.')
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;