import ExpensedDate from "./ExpensedDate";
import "./Expense.css";

function Expense() {
  const Array = [
    { id: 1, title: "ms", money: 3000 },
    { id: 2, title: "js", money: 2000 },
    { id: 3, title: "jw", money: 6000 },
  ];
  return (
    <div>
      <ExpensedDate Array={Array} />
    </div>
  );
}

export default Expense;
