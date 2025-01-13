import React, { useContext, useState } from 'react'
import ProductDetailCard from '../../main/ProductDetailCard'
import products from '../../../data/products.json'
import { CartContext } from '../../../context/CartContext'
import '../../../styles/components/sub/ProductPage/productList.css'

const ProductList = ({ addToRecentViewed }) => {
  const { addToCart } = useContext(CartContext);
  const [sortType, setSortType] = useState("name");
  const [sortedItems, setSortedItems] = useState(products);

  const sortItems = (type) => {
    let sorted = [...products];
    if (type === "name-desc") { //ㄱㄴㄷ
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "name-asc") { //ㄷㄴㄱ
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "new") { //3 2 1 
      sorted.sort((a, b) => b.id - a.id);
    } else if (type === "price-asc") { // 가격 낮은 순 -> 높은 순
      sorted.sort((a, b) => 
        (a.price * (1 - a.discountRate / 100)) - 
        (b.price * (1 - b.discountRate / 100))
      );
    } else if (type === "price-desc") { // 가격 높은 순 -> 낮은 순
      sorted.sort((a, b) => 
        (b.price * (1 - b.discountRate / 100)) - 
        (a.price * (1 - a.discountRate / 100))
      );
    }
    setSortedItems(sorted);
  };

  const handleSortChange = (type) => {
    setSortType(type);
    sortItems(type);
  };

  return (
    <div className='product-list-wrap'>
      <div className="product-list-menu">
        <span>등록제품: {products.length}개</span>
      <div className='order-tabs'>
        <button onClick={() => handleSortChange("new")} className={`order-tab ${sortType === "new" ? "active" : ""}`}>
          신상품
        </button>
        <button onClick={() => handleSortChange("name-asc")} className={`order-tab ${sortType === "name-asc" ? "active" : ""}`}>
          상품명(오름차순)
        </button>
        <button onClick={() => handleSortChange("name-desc")} className={`order-tab ${sortType === "name-desc" ? "active" : ""}`}>
          상품명(내림차순)
        </button>
        <button onClick={() => handleSortChange("price-asc")} className={`order-tab ${sortType === "price-asc" ? "active" : ""}`}>
          낮은가격
        </button>
        <button onClick={() => handleSortChange("price-desc")} className={`order-tab ${sortType === "price-desc" ? "active" : ""}`}>
          높은가격
        </button>
      </div>
      </div>
      <div className='product-grid'>
        {sortedItems.map((product) => (
          <ProductDetailCard key={product.id} product={product} addToCart={addToCart} addToRecentViewed={addToRecentViewed}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList