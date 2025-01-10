import React from 'react'
import Title from '../common/Title'
import '../../styles/components/main/category.css'
import categoryIcon from '../../data/category.json'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { useRef, useCallback } from 'react'

const Category = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 6,
    slidesToShow: 6,
  };

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
    <section className='category-wrap inner'>
      <div className="title-wrap">
      <Title title={`어라운드 \n 카테고리 한 눈에 보기`} subTitle={'어라운드의 카테고리를 \n 한 번에 확인해 보세요!'}/>
        <div className="prev-next-btn">
          <button onClick={previous} className='prev-btn'><ChevronLeft /></button>
          <button onClick={next} className='next-btn'><ChevronRight /></button>
        </div>
      </div>
      <Slider className='category-slider' {...settings} ref={slickRef}>
        {categoryIcon.map((icon) => {
          return(
            <div key={icon.id} className='category-icon'>
              <div className="icon-image">
                <img src={icon.image}/>
              </div>
              <div className="icon-text">
                <b>{icon.title}</b>
                <span>{icon.subTitle}</span>
              </div>
          </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default Category