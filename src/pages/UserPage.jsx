import React, { useContext, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import ShopInfo from '../components/sub/ShopInfo'
import ShopHeader from '../components/sub/ShopHeader'
import Title from '../components/common/Title'
import { LoginContext } from '../context/LoginContext'
import '../styles/pages/userPage.css'



const UserPage = () => {
  const { isLoggedIn, username, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);


  return (
    <div className='user-page inner sub-inner'>
      <ShopInfo/>
      <div className='user-page-wrap sub-wrap'>
      <ShopHeader category={'마이페이지'}/>
      <Title title={'마이페이지'} subTitle={'회원정보를 확인하세요.'}></Title>
        {isLoggedIn && (
          <div className="user-info">
            <table>
              <tr>
                <th style={{width: '20%'}}>아이디</th>
                <td>{username}</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>어라운드</td>
              </tr>
              <tr>
                <th>생일</th>
                <td>2000.04.03</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>(13494) 경기 성남시 분당구 대왕판교로 670 유스페이스2</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>031-628-6380</td>
              </tr>
            </table>
            <div className='user-button-group'>
              <button className='edit-button'>회원정보 수정</button>
              <button className='logout-button' onClick={() =>
                {
                  if(window.confirm('정말 로그아웃하겠습니까?')){
                    logout(); 
                    alert('로그아웃 되었습니다.')
                  }
                }}>로그아웃</button>
              <button className='delete-button' onClick={() => {
                if(window.confirm('정말 탈퇴하겠습니까?')){
                  logout();
                  alert('회원 탈퇴가 완료되었습니다.')
                }
              }
              }>탈퇴</button>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default UserPage