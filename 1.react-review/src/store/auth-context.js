import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  loginHandler: ()=>{},
  logoutHandler:()=>{}
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler() {
    setIsLoggedIn(true);
  }
  function logoutHandler() {
    setIsLoggedIn(false);
  }

  const context = {
    isLoggedIn: isLoggedIn,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
