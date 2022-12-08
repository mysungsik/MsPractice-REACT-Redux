import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

function UseContextPractice() {
  const ctx = useContext(AuthContext);

  function login() {
    ctx.loginHandler();
  }
  function logout() {
    ctx.logoutHandler();
  }
  console.log(ctx.isLoggedIn);

  return (
    <div>
      <button onClick={login}> 컨텍스트 로그인 </button>
      <button onClick={logout}> 컨텍스트 로그아웃</button>
    </div>
  );
}

export default UseContextPractice;
