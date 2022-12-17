import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const Auth = () => {
  const authDispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    authDispatch(authAction.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={(e) => loginHandler(e)}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
