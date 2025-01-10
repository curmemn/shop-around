import React from 'react';
import Title from '../common/Title';
import GalleryCard from './GalleryCard';
import galleries from '../../data/gallery.json';
import '../../styles/components/main/gallery.css'
import { useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
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
    <section className='gallery-wrap inner'>
      <Title title={'갤러리'} subTitle={'나만의 라이프스타일을 뽐내고 푸짐한 경품 받아가세요!'}/>
        <Slider className='gallery-slider' {...settings} ref={slickRef}>
        {galleries.map((list) => (
          <GalleryCard key={list.id} {...list} />
        ))}
        </Slider>
        <div className="prev-next-btn">
          <button className="prev-btn" onClick={previous}><ChevronLeft /></button>
          <button className="next-btn" onClick={next}><ChevronRight /></button>
        </div>
    </section>
  )
}

export default Gallery