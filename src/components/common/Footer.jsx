import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, ChatDotsFill, Youtube } from 'react-bootstrap-icons';
import '../../styles/components/common/footer.css'

const Footer = () => {
  return (
    <footer className='footer-wrap'>
      <div className='footer inner'>
        <div className="footer-top">
          <ul>
            <li><Link to='/'>회사소개</Link></li>
            <li><Link to='/'>이용약관</Link></li>
            <li><Link to='/'>개인정보처리방침</Link></li>
            <li><Link to='/'>이용안내</Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
        <div className='footer-left'>
          <p>
          법인명 : 굿디몰디자인 / 대표자 : 굿디몰디자인<br/>
          사업자등록번호 : [사업자정보확인] / 통신판매업 신고 2016-성남분당-0137<br/>
          전화 : 031-628-6380 / 팩스 : 031-628-6381 / 주소 : 13494 경기 성남시 분당구 대왕판교로 670 유스페이스2<br/>
          개인정보관리책임 : 굿디몰디자인(help@goodymall.co.kr) Hosting by 카페24<br/>
          </p>
          <p className='footer-shop-info'>
          고객센터 : 031-628-6380<br/>
          예금주 : 굿디몰디자인 우리 1002-355-664254 / 신한 1234-123-123456
          </p>
          <div className='escrow-box'>
            <h5>구매안전서비스</h5>
            <span>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다.</span>
            <button>가입사실확인<ChevronRight/></button>
          </div>
        </div>
        <div className='footer-right'>
          <ul>
            <li><Link to='/'>BRAND</Link></li>
            <li><Link to='/'>SHOP</Link></li>
            <li><Link to='/'>EVENT</Link></li>
            <li><Link to='/'>COMMUNITY</Link></li>
          </ul>
          <div className="sns-icon">
            <button><Facebook/></button>
            <button><Instagram/></button>
            <button><ChatDotsFill/></button>
            <button><Youtube/></button>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer