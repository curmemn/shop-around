import React from 'react';
import '../styles/pages/homePage.css'
import MainVisual from '../components/main/MainVisual';
import Category from '../components/main/Category';
import BestProduct from '../components/main/BestProduct';
import Promotion from '../components/main/Promotion';
import NewArrival from '../components/main/NewArrival';
import Gallery from '../components/main/Gallery';
import RemodelingPick from '../components/main/RemodelingPick';
import HomeDecoItem from '../components/main/HomeDecoItem';
import PopularCategory from '../components/main/PopularCategory';
import LongBanner from '../components/main/LongBanner';
import Review from '../components/main/Review';
import Instagram from '../components/main/Instagram';


const HomePage = ({ addToRecentViewed }) => {
  return (
    <div className='home-page'>
      <MainVisual />
      <Category />
      <BestProduct addToRecentViewed={addToRecentViewed}/>
      <Promotion />
      <NewArrival addToRecentViewed={addToRecentViewed}/>
      <Gallery />
      <RemodelingPick addToRecentViewed={addToRecentViewed}/>
      <HomeDecoItem addToRecentViewed={addToRecentViewed}/>
      <PopularCategory addToRecentViewed={addToRecentViewed}/>
      <LongBanner />
      <Review />
      <Instagram />
    </div>
  )
}

export default HomePage