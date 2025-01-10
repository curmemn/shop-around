import React from 'react';
import Title from '../common/Title';
import { Link } from 'react-router-dom';
import '../../styles/components/main/promotion.css'
import { ArrowRight } from 'react-bootstrap-icons';

const Promotion = () => {
  return (
    <section className='promotion-wrap inner'>
      <Link to="/" className="promotion-card">
        <div className="promotion-text">
          <Title title={'홈오피스 프로모션'} subTitle={'플랙스로 만나는 우리 집안의\n 작은 오피스'}/>
          <button className='more-button'>MORE<ArrowRight /></button>
        </div>
        <img src="/assets/images/main-banner01.jpg" alt="홈오피스 프로모션" />
      </Link>
      <Link to="/" className="promotion-card">
        <div className="promotion-text">
          <Title title={'어라운드 가구'} subTitle={'소소한 행복,\n 인기 소가구 모음전'}/>
          <button className='more-button'>MORE<ArrowRight /></button>
        </div>
        <img src="/assets/images/main-banner02.jpg" alt="어라운드 가구" />
      </Link>
    </section>
  )
}

export default Promotion