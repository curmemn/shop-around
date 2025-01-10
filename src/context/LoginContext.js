import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (username, password) => {
    if (username === "around" && password === "around1234") {
      setUsername(username);
      SetIsLoggedIn(true);
      return true; // 로그인 성공 여부 반환
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
      return false; // 로그인 실패
    }
  };
  const logout = () => {
    SetIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider