import React, { useState, useEffect, useContext } from 'react';
import { Cart3, Clock, Person, Search, ChevronRight } from 'react-bootstrap-icons';
import '../../styles/components/common/header.css'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { LoginContext } from '../../context/LoginContext';

const Header = ({ recentViewed }) => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(LoginContext);

  function openNav() {
    document.querySelector('.nav-menu-icon').classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
  }

  function openSub(index) {
    let subMenu = document.querySelectorAll('.sub-menu')[index];
    subMenu.classList.add('active');
}

  function closeSub(index) {
    let subMenu = document.querySelectorAll('.sub-menu')[index];
    subMenu.classList.remove('active');
}

  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    const handleFixedHeader = () => {
      if (window.scrollY > 202) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };

    window.addEventListener('scroll', handleFixedHeader);

    return () => {
      window.removeEventListener('scroll', handleFixedHeader);
    };
  }, []);

  return (
    <div className='header-wrap'>
      <header className='header inner'>
        <ul className="header-state">
        {isLoggedIn ? 
          <>
          <li><button className='logout-button' onClick={() => {
            if(window.confirm('정말 로그아웃하겠습니까?')){
              logout(); 
              alert('로그아웃 되었습니다.')
            }
            navigate('/')}}>로그아웃</button></li>
          <li><Link to='/user'>마이페이지</Link></li>
          </>
        : 
          <>
            <li><Link to='/login'>로그인</Link></li>
            <li><Link to='/login'>회원가입</Link></li>
          </>}
          
          <li><Link to='/'>주문조회</Link></li>
          <li><Link to='/'>쿠폰존</Link></li>
        </ul>
        <div className="header-main">
        <Link to='/' className='header-logo'>
          <img src="/assets/images/logo.png" alt="around 로고"/>
        </Link>
        <div className='search-wrap'>
          <input type="text" placeholder='찾으시는 가구를 검색해보세요.'/>
          <button className='search-button'><Search /></button>
        </div>
        <div className='button-wrap'>
          <Link to='/cart' className="button-item">
            <Cart3 />
            {cartItems.length > 0 && (
              <span className='cart-count count'>{totalQuantity}</span>
            )}
            <span>장바구니</span>
          </Link>
          <Link to='/' className="button-item">
            <Clock />
            {recentViewed.length > 0 && (
              <span className='recent-count count'>{recentViewed.length}</span>
            )}
            <span>최근 본 상품</span>
          </Link>
          <Link to={isLoggedIn ? '/user' : '/login'} className="button-item">
            <Person />
              <span className='check-login count'>{isLoggedIn ? 'ON' : 'OFF'}</span>
            <span>마이페이지</span>
          </Link>
        </div>
        </div>
      </header>
      <nav className={`header-nav ${fixedHeader ? 'active' : ''}`}>
        <ul className='header-nav-row'>
          <li onClick={openNav}>
            <div div className='nav-menu-icon'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link>전체 카테고리</Link>
          </li>
          <li><Link to='/'>회사소개</Link></li>
          <li><Link to='/'>베스트셀러</Link></li>
          <li><Link to='/'>신상품</Link></li>
          <li><Link to='/'>COMMUNITY</Link></li>
          <div className='nav-menu'>
          <ul>
            <li className='nav-category'>
              <Link to='/product'>침실가구</Link>
              <ul>
              <li><Link to='/product'>침대</Link></li>
              <li><Link to='/product'>매트릭스</Link></li>
              <li><Link to='/product'>침실소가구</Link></li>
            </ul>
            </li>
            <li className='nav-category'>
              <Link to='/product'>거실가구</Link>
              <ul>
              <li><Link to='/product'>거실소파</Link></li>
              <li><Link to='/product'>거실테이블</Link></li>
            </ul>
            </li>
            <li className='nav-category'>
              <Link to='/product'>옷장/수납가구</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>주방가구</Link>
              <ul>
              <li><Link to='/product'>식탁/의자</Link></li>
              <li><Link to='/product'>싱크대/수납</Link></li>
            </ul>
            </li>
            <li className='nav-category'>
              <Link to='/product'>키즈/주니어</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>서재/홈오피스</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>홈데코</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>조명/홈케어</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>반려/동물</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>리모델링/시공 아이템</Link>
            </li>
            <li className='nav-category'>
              <Link to='/product'>패브릭</Link>
            </li>
            <li className='nav-category'>
              <Link to='/notice'>COMMUNITY</Link>
              <ul>
                <li><Link to='/notice'>공지사항</Link></li>
                <li><Link to='/notice'>REVIEW</Link></li>
                <li><Link to='/notice'>상품 Q&A</Link></li>
                <li><Link to='/notice'>자유게시판</Link></li>
                <li><Link to='/notice'>갤러리</Link></li>
            </ul>
            </li>
          </ul>
        </div>
          <nav className={`header-float-nav ${fixedHeader ? 'active' : ''}`}>
            <ul>
              <li className='float-nav' onMouseEnter={() => openSub(0)} onMouseLeave={() => closeSub(0)}>
                <Link to='/product'>침실가구 <ChevronRight/></Link>
                <ul className='sub-menu'>
                  <li><Link to='/product'>침대</Link></li>
                  <li><Link to='/product'>매트릭스</Link></li>
                  <li><Link to='/product'>침실소가구</Link></li>
                </ul>
              </li>
              <li className='float-nav' onMouseEnter={() => openSub(1)} onMouseLeave={() => closeSub(1)}>
                <Link to='/product'>거실가구 <ChevronRight/></Link>
                <ul className='sub-menu'>
                  <li><Link to='/product'>거실소파</Link></li>
                  <li><Link to='/product'>거실테이블</Link></li>
                </ul>
              </li>
              <li>
                <Link to='/product'>옷장/수납가구 <ChevronRight/></Link>
              </li>
              <li className='float-nav' onMouseEnter={() => openSub(2)} onMouseLeave={() => closeSub(2)}>
                <Link to='/product'>주방가구 <ChevronRight/></Link>
                <ul className='sub-menu'>
                  <li><Link to='/product'>식탁/의자</Link></li>
                  <li><Link to='/product'>싱크대/수납</Link></li>
                </ul>
              </li>
              <li>
                <Link to='/product'>키즈/주니어 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>서재/홈오피스 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>홈데코 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>조명/홈케어 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>반려/동물 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>리모델링/시공 아이템 <ChevronRight/></Link>
              </li>
              <li>
                <Link to='/product'>패브릭 <ChevronRight/></Link>
              </li>
            </ul> 
          </nav>
        </ul>
      </nav>
    </div>
  )
}

export default Header