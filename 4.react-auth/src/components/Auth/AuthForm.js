import { useState, useRef } from "react";
import { useCookies } from "react-cookie";

import classes from "./AuthForm.module.css";
import Spinner from "../UI/Spinner";

const AuthForm = () => {
  const [cookies, setCookie] = useCookies(["auth-cookie"]);
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // 로딩

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // [추가할것] 당연히, Validation 추가해야하고

    if (isLogin) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxe7GPLnV_nM-s_SExIFnA1VvboXPmR2g",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      setLoading(false); // 로딩 끝

      if (responseData.error) {
        setErrorMessage(responseData.error.message);
      }

      setCookie("auth-cookie", responseData.idToken);
    } else {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxe7GPLnV_nM-s_SExIFnA1VvboXPmR2g",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // [추가할것]response.ok 를 통해 이상하면 에러출력하고

      const responseData = await response.json();
      setLoading(false); // 로딩 끝

      if (responseData.error) {
        setErrorMessage(responseData.error.message);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {errorMessage !== "" && <p className={classes.error}> {errorMessage}</p>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {loading ? (
            <Spinner />
          ) : (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
