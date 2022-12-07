import ExpenseForm from "./Expense-Form";
import ExpenseSelector from "./Expense-Selector";
import styles from "./NewExpense.module.css";

function NewExpense(props) {
  const { onSaveYearValueToMain } = props;

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveChildData(expenseData);
  }

  function onSaveYearValue(e) {
    onSaveYearValueToMain(e.target.value);
  }

  return (
    <div className={styles.maindiv}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseSelector onSaveYearValue={onSaveYearValue} />
    </div>
  );
}
export default NewExpense;
