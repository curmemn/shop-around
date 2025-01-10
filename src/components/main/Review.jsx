import React from 'react';
import Title from '../common/Title';
import ReviewCard from '../main/ReviewCard';
import reviews from '../../data/reviews.json';
import '../../styles/components/main/review.css'
import { useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Review = () => {
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
    <section className='review-wrap inner'>
      <div className="review-wrap-title">
      <Title title={'REVIEW'} subTitle={'상품을 이용하신 고객님들의 리얼 후기입니다!'} />
      <button className='more-button'>MORE <ChevronRight/></button>
      </div>
      <Slider className='review-slider' {...settings} ref={slickRef}>
        {reviews.map((review) => (
          reviews.map((review) => (
            <ReviewCard key={review.id} {...review}/>
          ))
        ))}
      </Slider>
      <div className="prev-next-btn">
          <button className="prev-btn" onClick={previous}><ChevronLeft /></button>
          <button className="next-btn" onClick={next}><ChevronRight /></button>
        </div>
    </section>
  )
}

export default Review