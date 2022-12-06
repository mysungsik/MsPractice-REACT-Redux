import styles from "./ExpensiveItem.module.css";

function ExpensiveItem(props) {
  const { title, money } = props;
  const expenseDate = new Date().toLocaleDateString("ko-KR");

  console.log(expenseDate);
  return (
    <div className={styles.itemDiv}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <h2>{money}</h2>
        <div>{expenseDate}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;
