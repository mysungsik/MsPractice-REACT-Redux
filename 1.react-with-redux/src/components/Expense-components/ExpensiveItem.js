import { useState } from "react";
import styles from "./ExpensiveItem.module.css";

function ExpensiveItem(props) {
  const { title, amount, date } = props;
  const expenseDate = new Date().toLocaleDateString("ko-KR");

  const [name, setName] = useState("none");

  return (
    <div className={styles.itemDiv}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <h2>{amount}</h2>
        <div>{date}</div>
      </div>
      <button onClick={() => setName("lol")}> change </button>
    </div>
  );
}

export default ExpensiveItem;
