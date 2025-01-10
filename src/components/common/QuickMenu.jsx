import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'react-bootstrap-icons'
import RecentProduct from'./RecentProduct'
import '../../styles/components/common/quickMenu.css'
import { Link } from 'react-router-dom'

const QuickMenu = ({recentViewed}) => {
  //위로 올라가는 버튼
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  //스크롤 양 따라서 퀵 메뉴가 보여지고 숨겨지게
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  useEffect(() => {
    const handleShowQuickMenu = () => {
      if(window.scrollY > 100) {
        setShowQuickMenu(true)
      }else{
        setShowQuickMenu(false)
      }
    }
    window.addEventListener('scroll', handleShowQuickMenu)
    return() => {
      window.removeEventListener('scroll', handleShowQuickMenu);
    }
  }, [])

  return (
    <div className={showQuickMenu ? 'quick-menu active' : 'quick-menu'}>
      <RecentProduct recentViewed={recentViewed} />
      <div className='quick-button'>
        <Link to='https://pf.kakao.com/_hxcTRK' className='quick-kakao' target='_blank'>
          <img src="/assets/images/talk-kakao.png" alt="카카오톡 상담하기"/>
        </Link>
        <Link to='https://partner.talk.naver.com/' className='quick-naver' target='_blank'>
          <img src="/assets/images/talk-naver.png" alt="네이버 톡톡 상담하기"/>
        </Link>
        <button className='quick-top' onClick={scrollToTop}>
          <ArrowUp/>
        </button>
      </div>
    </div>
  )
}

export default QuickMenu