import { useEffect, useState,  } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  function loginHandler(e) {
    e.preventDefault();

    localStorage.setItem("Login", "1");
    setIsLogin(true);
  }

  useEffect(() => {
    const storedUserLogin = localStorage.getItem("Login");

    if (storedUserLogin === "1") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  function logOutHandler(e) {
    e.preventDefault();

    localStorage.removeItem("Login");
    setIsLogin(false);
  }

  return (
    <div>
      <button onClick={loginHandler}> 로그인 </button>
      <button onClick={logOutHandler}> 로그아웃</button>
      {isLogin && <h1> 로그인되었습니다.</h1>}
    </div>
  );
}
export default Login;
