import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import '../../styles/components/sub/shopHeader.css'

const ShopHeader = ({category}) => {
  return (
    <div className='shop-header'>
      <span>홈 <ChevronRight/> {category}</span>
    </div>
  )
}

export default ShopHeader