import ExpensiveItem from "./ExpensiveItem";
import styles from "./ExpensedDate.module.css";

function ExpensedDate(props) {
  const { Array } = props;

  return (
    <div className={styles.maindiv}>
      {Array.map((item) => (
        <ExpensiveItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
export default ExpensedDate;
