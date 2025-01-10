import React, { useContext } from 'react'
import WideVisualProduct from './WideVisualProduct';
import Title from '../common/Title';
import '../../styles/components/main/remodelingPick.css';
import products from '../../data/products.json';
import { ArrowRight } from 'react-bootstrap-icons';
import { CartContext } from '../../context/CartContext'

const RemodelingPick = ({ addToRecentViewed}) => {
  const { addToCart } = useContext(CartContext);
  const slicedProducts = products.slice(0, 3);
  return (
    <section className='remodeling-wrap inner'>
      <Title title={'리모델링 PICK'} subTitle={'고객님들께 자신있게 추천드리는 상품입니다!'} />
      <WideVisualProduct
      addToCart={addToCart}
      addToRecentViewed={addToRecentViewed}
      content={
        <div className='wide-area'>
          <img src="/assets/images/prd-banner01.jpg"></img>
          <div className="wide-visual-text">
            <Title title={'DONO EDGE\n 세라믹 식탁'} subTitle={'판매량 BEST 한정특가\n 함께사면 추가할인!'}/>
            <button className='more-button'>MORE<ArrowRight/></button>
          </div>
        </div>
      }
      products={slicedProducts}/>
    </section>
  )
}

export default RemodelingPick