import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/components/common/banner.css';
import { XLg } from 'react-bootstrap-icons';

const Banner = () => {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    vertical: true,
    speed: 1000,
    slidesToShow: 1,
  }

  function closeBanner () {
    document.querySelector('.banner-wrap').style.maxHeight = 0;
  }

  return (
    <div className='banner-wrap'>
      <div className='banner-text-wrap'>
        <Slider {...settings}>
          <div className='banner-text text1'>around GRAND OPEN!</div>
          <div className='banner-text text2'>신규 회원가입시 다양한 혜택이 가득!</div>
        </Slider>
      </div>
      <button className='banner-close-button' onClick={closeBanner}>
        <XLg/>
      </button>
    </div>
  )
}

export default Banner