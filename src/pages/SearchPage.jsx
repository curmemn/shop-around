import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import products from '../data/products.json';
import ShopInfo from '../components/sub/ShopInfo';
import Title from '../components/common/Title';
import ShopHeader from '../components/sub/ShopHeader';
import SearchResultList from '../components/sub/searchPage/SearchResultList';
import BestProduct from '../components/main/BestProduct';
import '../styles/pages/searchPage.css'
import { ArrowRight } from 'react-bootstrap-icons';

const SearchPage = ({ addToRecentViewed }) => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  // 쿼리 파라미터에서 검색어 추출
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      performSearch(query); // 검색 실행
    }
  }, [query]);

  const performSearch = (searchItem) => {
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <div className='search-page inner sub-inner'>
      <ShopInfo/>
      <div className='search-page-wrap sub-wrap'>
        <ShopHeader category={'상품 검색'}/>
        <Title title={`상품 검색`} subTitle={`"${query}"의 검색 결과입니다.`}/>
        {searchResults.length > 0 ? (
          <SearchResultList
            products={searchResults}
            addToRecentViewed={addToRecentViewed}
          />
        ) : (
      <div class="no-result">
        <h1>검색 결과가 없습니다.</h1>
        <Link to="/product">
          <button class="more-button">상품 보러가기<ArrowRight/></button>
        </Link>
      </div>
        )}
        <BestProduct addToRecentViewed={addToRecentViewed}/>
      </div>
    </div>
  )
}

export default SearchPage