import React, { useContext, useCallback, useRef } from 'react'
import Title from '../common/Title';
import ProductSquareCard from './ProductSquareCard';
import '../../styles/components/main/bestProduct.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '../../data/products.json';
import { CartContext } from '../../context/CartContext'

const BestProduct = ({ addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 5,
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
    <section className='best-product-wrap inner'>
      <Title title={'BEST PRODUCT'} subTitle={'고객님을 위한 추천 제품입니다!'}/>
      <Slider className='best-product-slider' {...settings} ref={slickRef}>
        {products.map((product) => (
          <ProductSquareCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
        ))}
      </Slider>
      <div className="prev-next-btn">
          <button className="prev-btn" onClick={previous}><ChevronLeft /></button>
          <button className="next-btn" onClick={next}><ChevronRight /></button>
        </div>
    </section>
  );
};

export default BestProduct;