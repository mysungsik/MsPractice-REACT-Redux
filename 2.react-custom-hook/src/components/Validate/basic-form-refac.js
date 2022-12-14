import styles from "./basic-form-refac.module.css";
import AlertFun from "./alert";
import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

function BasicFormRefac() {
  const [error, setError] = useState(false);
  const inputTextResult = useInput(
    (inputText) => String(inputText).trim() === ""
  );
  const inputEmailResult = useInput(
    (inputEmail) => !String(inputEmail).includes("@")
  );
  const {
    inputValue: inputText,
    hasError: inputTextError,
    inputIsTouched: inputTextIsTouched,
    inputHandler: inputTextHandler,
    inputTouchHandler: inputTextTouchHandler,
  } = inputTextResult;

  const {
    inputValue: inputEmail,
    hasError: inputEmailError,
    inputIsTouched: inputEmailIsTouched,
    inputHandler: inputEmailHandler,
    inputTouchHandler: inputEmailTouchHandler,
  } = inputEmailResult;

  function validationCheck() {
    if (inputTextIsTouched && inputEmailIsTouched) {
      if (inputTextError || inputEmailError) {
        setError(true);
      }
    }
  }

  useEffect(() => {
    validationCheck();
  }, [inputText, inputEmail, inputTextIsTouched, inputEmailIsTouched]);

  return (
    <form className={styles.maindiv}>
      <label htmlFor="text"> 이름</label>
      <input
        type={"text"}
        id={"text"}
        onChange={inputTextHandler}
        onBlur={inputTextTouchHandler}
      />
      <label htmlFor="email"> 이메일</label>
      <input
        type={"email"}
        id={"email"}
        onChange={inputEmailHandler}
        onBlur={inputEmailTouchHandler}
      />
      {error && <AlertFun />}
    </form>
  );
}

export default BasicFormRefac;
