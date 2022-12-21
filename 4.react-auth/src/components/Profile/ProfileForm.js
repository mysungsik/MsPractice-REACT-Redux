import classes from "./ProfileForm.module.css";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const [cookies] = useCookies(["auth-cookie"]);
  const history = useHistory();

  let isAuth = false;
  if (cookies["auth-cookie"] !== "undefined") {
    isAuth = true;
  }

  if (!isAuth) {
    history.replace("/");
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
