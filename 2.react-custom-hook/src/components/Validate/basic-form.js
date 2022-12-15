import styles from "./basic-form.module.css";
import AlertFun from "./alert";
import { useEffect, useState } from "react";

function BasicForm() {
  const [inputText, setInputText] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [textIsTouched, setTextIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [error, setError] = useState(false);

  // [validation 추가]
  // 1. input blur 되고, email 도 blur 되었을때, validation 을 체크한다.
  // 2. validation 로직은, 둘 중 하나라도 적지 않았다면 으로 한다.

  function validationCheck() {
    if (textIsTouched && emailIsTouched) {
      if (
        inputText.trim() === "" ||
        inputEmail.trim() === "" ||
        !inputEmail.includes("@")
      ) {
        setError(true);
      }
    }
  }

  useEffect(() => {
    validationCheck();
  }, [inputText, inputEmail]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(inputText);
    console.log(inputEmail);
  }

  function inputNameHandler(e) {
    setInputText(e.target.value);
  }

  function inputEmailHandler(e) {
    setInputEmail(e.target.value);
  }
  return (
    <form className={styles.maindiv}>
      <label htmlFor="text"> 이름</label>
      <input
        type={"text"}
        id={"text"}
        onChange={(e) => inputNameHandler(e)}
        onBlur={() => setTextIsTouched(true)}
      />
      <label htmlFor="email"> 이메일</label>
      <input
        type={"email"}
        id={"email"}
        onChange={(e) => inputEmailHandler(e)}
        onBlur={() => setEmailIsTouched(true)}
      />
      {error && <AlertFun />}
      <button onClick={submitHandler}> 입력 </button>
    </form>
  );
}

export default BasicForm;
