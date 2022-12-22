import classes from "./MainNavigation.module.css";

import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const MainNavigation = () => {
  const [cookies, removeCookie] = useCookies(["auth-cookie"]);

  const logoutHandler = (e) => {
    e.preventDefault();
    removeCookie("auth-cookie");
  };

  let isAuth = false;

  if (cookies["auth-cookie"] !== "undefined") {
    isAuth = true;
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>{isAuth && <button onClick={logoutHandler}>Logout</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
