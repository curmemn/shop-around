import React from 'react'
import '../../styles/components/sub/shopInfo.css'

const ShopInfo = () => {
  return (
    <div className='shop-info'>
      <div className='shop-info-wrap'>
        <div className='shop-info-item'>
          <span><b>고객센터:</b></span>
          <h3>031-628-6380</h3>
        </div>
        <div className='shop-info-item'>
          <span><b>예금주:</b></span>
          <h3>굿디몰디자인</h3>
          <span><b>우리</b> 1002-355-664254 /<br/> <b>신한</b> 1234-123-123456</span>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo