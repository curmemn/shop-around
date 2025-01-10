import React, { useContext, useState } from 'react'
import ShopInfo from '../components/sub/ShopInfo'
import ShopHeader from '../components/sub/ShopHeader'
import Title from '../components/common/Title'
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'
import { PersonLock } from 'react-bootstrap-icons'
import '../styles/pages/loginPage.css'

const LoginPage = () => {

  const { login } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isSuccess = login(username, password);
    if (isSuccess) {
      navigate('/');
    }
  };

  return (
    <div className='login-page inner sub-inner'>
      <ShopInfo/>
      <div className='login-page-wrap sub-wrap'>
      <ShopHeader category={'로그인'}/>
      <Title title={'로그인'} subTitle={'로그인이 필요합니다.'}></Title>
      <div className='login-form'>
      <form onSubmit={handleLogin}>
        <div className='login-group'>
          <label>아이디</label>
          <input
            type="text"
            value={username}
            placeholder='아이디를 입력하세요.(around)'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='login-group'>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            placeholder='비밀번호를 입력하세요.(around1234)'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='login-menu'>
          <span className='security-login'><PersonLock/>보안접속</span>
          <div className='login-suggest'>
            <span>아이디찾기</span>
            <span>비밀번호찾기</span>
            <span>회원가입</span>
          </div>
        </div>
        <button type="submit" className='login-submit'>로그인</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default LoginPage