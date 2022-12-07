import styles from "./Expense-Form.module.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(userInput.title, userInput.amount, userInput.date);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    props.onSaveExpenseData(userInput);
  }

  function titleChangeHandler(e) {
    setUserInput((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }

  function amountChangeHandler(e) {
    setUserInput((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  }

  function dateChangeHandler(e) {
    setUserInput((prev) => ({
      ...prev,
      date: e.target.value,
    }));
  }

  return (
    <form className={styles.maindiv}>
      <div className={styles.new_expense_controls}>
        <label> Title </label>
        <input
          type={"text"}
          value={userInput.title}
          onChange={(e) => titleChangeHandler(e)}
        />
      </div>
      <div className={styles.new_expense_controls}>
        <label> Amount </label>
        <input
          type={"number"}
          value={userInput.amount}
          onChange={(e) => amountChangeHandler(e)}
        />
      </div>
      <div className={styles.new_expense_controls}>
        <label> Date </label>
        <input
          type={"date"}
          min="2019-01-01"
          max="2022-12-31"
          value={userInput.date}
          onChange={(e) => dateChangeHandler(e)}
        />
      </div>
      <div>
        <button onClick={submitHandler}> 제출</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
