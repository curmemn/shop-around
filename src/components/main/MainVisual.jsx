import React from 'react';
import { useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../styles/components/main/MainVisual.css';
import { ChevronLeft, ChevronRight, PlayFill, PauseFill, ArrowRight } from 'react-bootstrap-icons';

const MainVisual = () => {

  const slideContent = [
    {id: 1, image: '/assets/images/main-img01.jpg', title: '봄맞이 BEST로! 특가만 가져와 봄', subTitle: `기간별 10% 쿠폰혜택 ~UP TO 80% OFF`}, 
    {id: 2, image: '/assets/images/main-img02.jpg', title: '새 봄맞이 홈오피스 LOVING WEEK', subTitle: 'NEW 오브제 베스트셀러 책상·의자 둘러보기'}, 
    {id: 3, image: '/assets/images/main-img03.jpg', title: '우리들의 리모델링 슬기로운 방콕생활', subTitle: '최대 365만원 상당 혜택! 더블 적립'}, 
  ]

  const [autoPlay, setAutoPlay] = useState(true);

  var settings = {
    dots: true,
    autoplay: autoPlay,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 1,
    centerMode: false,
    arrows: false,
    customPaging: (i) => {
      return (
        <span className="pagenation">
          <span className="current-page">
            {(i + 1)}
          </span>
          /
          <span className="total-page">
            {slideContent.length}
          </span>
        </span>
      );
    },
  }

  const slickRef = useRef(null);

  const previous = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  }, []);

  const next = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

    
  return (
    <section className='main-visual-wrap'>
    <div className='slider-wrap'>
      <Slider ref={slickRef} {...settings}>
      {slideContent.map((content) => {
        return (
          <div className='slider-content' key={content.id}>
          <img src={content.image}/>
          <div className="slider-text">
            <h1>{content.title}</h1>
            <span>{content.subTitle}</span>
            <button className='more-button'>MORE<ArrowRight /></button>
          </div>
        </div>
        )
      })}
      </Slider>
      <div className="slider-button">
        <div className="main-prev-next-btn">
        <button onClick={previous}><ChevronLeft /></button>
        <button onClick={next}><ChevronRight /></button>
        </div>
          <button className='play-btn'  onClick={() => setAutoPlay(true)}><PlayFill /></button>
          <button className='pause-btn'  onClick={() => setAutoPlay(false)}><PauseFill /></button>
      </div>
    </div>
    </section>

  )
}

export default MainVisual