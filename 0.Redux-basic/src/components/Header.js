import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux"; // 1. react와 redux 를 연결하는 dispatch 와 selector 을 불러온다.
import { authAction } from "../store/auth"; // 2. auth State 변경을 위한 authAction 을 불러오고

const Header = () => {
  const authState = useSelector((state) => state.auth.Authentication); // 3. state 중, "Authentication" State를 불러온다.

  const authDispatch = useDispatch(); // 4. dispatch 사용을 위한, useDispatch 를 호출한다.

  const logoutHandler = () => {
    authDispatch(authAction.logout());
    console.log(authState);
  };
  console.log(authState);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {authState && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
