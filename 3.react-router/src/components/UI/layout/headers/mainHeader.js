import { Link, NavLink } from "react-router-dom";
import styles from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <ul className={styles.main_header}>
      <div className={styles.logo}>
        <NavLink to={"/"}>
          <h1>로고</h1>
        </NavLink>
      </div>
      <div className={styles.menu}>
        <li>
          <Link to={"/quotes"}> 명언</Link>
        </li>
        <li>
          <Link to={"/new-quotes"}> 새 명언</Link>
        </li>
      </div>
    </ul>
  );
};

export default MainHeader;
