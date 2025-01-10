import React, { useContext } from 'react'
import WideVisualProduct from './WideVisualProduct';
import Title from '../common/Title';
import '../../styles/components/main/homeDecoItem.css'
import products from '../../data/products.json';
import { CartContext } from '../../context/CartContext'

const HomeDecoItem = ({ addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  const slicedProducts = products.slice(0, 8);
  return (
    <section className='homedeco-wrap inner'>
      <Title title={'HOME DECO ITEM'} subTitle={'오직 어라운드에만 있는 브랜드 상품들입니다.'} />
      <WideVisualProduct
      addToCart={addToCart}
      addToRecentViewed={addToRecentViewed}
      content={
        <div className='wide-area'>
          <iframe
            width="840"
            height="480"
            src="https://www.youtube.com/embed/Ds8RE70jyeQ?start=77"
            title="A Life of Simplicity"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      }
      products={slicedProducts}/>
    </section>
  )
}

export default HomeDecoItem