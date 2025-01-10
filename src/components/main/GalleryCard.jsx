import React from 'react';
import '../../styles/components/main/galleryCard.css';
import { ArrowRight } from 'react-bootstrap-icons';

const GalleryCard = (gallery) => {

  const {id, title, desc, image} = gallery
  return (
    <div className='gallery-card'>
      <h3>[EVNET{id}] {title}</h3>
      <div className='gallery-image'>
        <img src={image} alt={title} />
      </div>
      <p>
        {desc}
      </p>
      <button className='more-button'>MORE<ArrowRight /></button>
    </div>
  )
}

export default GalleryCard