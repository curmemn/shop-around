import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CartProvider from './context/CartContext';
import LoginProvider from './context/LoginContext'
import Banner from './components/common/Banner';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import QuickMenu from './components/common/QuickMenu';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

/* css */
import './styles/reset/reset.css';
import './styles/global.css';

function App() {

  // 최근 본 상품 추가 함수
  const [recentViewed, setRecentViewed] = useState([]);
  const addToRecentViewed = (product) => {
    setRecentViewed((prev) => {
      // 중복 제거 로직
      const updated = prev.filter((item) => item.id !== product.id);
      updated.unshift(product); // 맨 앞에 추가
      return updated;
    });
  };

  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <Banner/>
          <Header recentViewed={recentViewed}/>
          <main>
            <Routes>
              <Route path='/' element={<HomePage addToRecentViewed={addToRecentViewed}/>}></Route>
              <Route path='/cart' element={<CartPage addToRecentViewed={addToRecentViewed}/>}></Route>
              <Route path='/product' element={<ProductPage  addToRecentViewed={addToRecentViewed}/>}></Route>
              <Route path='/product/:productId' element={<ProductDetailPage />}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/user' element={<UserPage />}></Route>
            </Routes>
          </main>
          <Footer />
          <QuickMenu recentViewed={recentViewed}/>
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
