import React, { useContext } from 'react';
import ProductDetailCard from '../../main/ProductDetailCard';
import { CartContext } from '../../../context/CartContext';
import '../../../styles/components/sub/searchPage/searchResultList.css'

const SearchResultList = ({ products, addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="search-result-list">
      {products.map((product) => (
        <ProductDetailCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToRecentViewed={addToRecentViewed}
        />
      ))}
    </div>
  );
};

export default SearchResultList;
