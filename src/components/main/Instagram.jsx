import React from 'react';
import Title from '../common/Title';
import InstagramCard from './InstagramCard';
import '../../styles/components/main/instagram.css'

const Instagram = () => {
  const instagramImage = [
    'insta01', 'insta02', 'insta03', 'insta04', 'insta05', 'insta06', 'insta07', 'insta08', 'insta09', 'insta10', 'insta11', 'insta12', 'insta13', 'insta14', 'insta15', 'insta16'
  ];
  
  
  return (
    <section className='instagram-wrap inner'>
      <Title title={'INSTAGRAM'} subTitle={'@around'}/>
      <div className='instagram-grid'>
        {instagramImage.map((image, index) => (
          <InstagramCard key={index} image={image}/>
        ))}
      </div>  
    </section>
  )
}

export default Instagram