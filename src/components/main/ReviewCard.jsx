import React from 'react';
import '../../styles/components/main/reviewCard.css'
import { StarFill } from 'react-bootstrap-icons';

const ReviewCard = (review) => {
  const {id, title, desc, author, rate, image} = review;
  const stars = Array(rate).fill(<StarFill />);
  return (
    <div className='review-card'>
      <div className='review-image'>
        <img src={image} alt={title}/>
      </div>
      <div className="review-text">
        <h1 className='review-title'>{title}</h1>
        <span className='review-rate'>{stars}</span>
        <span className='review-desc'>{desc}</span>
        <span className='review-author'>{author} 님</span>
      </div>
    </div>
  )
}

export default ReviewCard