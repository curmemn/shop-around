import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/main/instagramCard.css';

const InstagramCard = ({image}  ) => {
  return (
    <Link to='https://www.instagram.com' className='instagram-card'>
      <img src={`/assets/images/${image}.jpg`} alt="인스타그램" />
    </Link>
  )
}

export default InstagramCard