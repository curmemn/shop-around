import React from 'react';
import '../../styles/components/main/longBanner.css';
import { Link } from 'react-router-dom';

const LongBanner = () => {
  return (
    <section className='long-banner-wrap inner'>
      <Link to='/' className='long-banner-image'>
        <img src="/assets/images/long-banner01.jpg"/>
      </Link>
      <div className='long-banner-text'>
        <h1>거실 소파 무료체험 이벤트</h1>
        <span>#타임특가 #신상품<br/>#2주 무료체험</span>
      </div>
    </section>
  )
}

export default LongBanner