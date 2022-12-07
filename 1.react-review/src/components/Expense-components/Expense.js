import ExpensedDate from "./ExpensedDate";
import ExpenseChart from "./ExpenseChart";
import "./Expense.css";
import { useEffect, useState } from "react";

function Expense(props) {
  const { fromNewExpense } = props;
  const Array = [
    {
      id: 1,
      title: "ms",
      amount: 3,
      date: new Date("2020-10-05").toLocaleDateString(),
    },
    {
      id: 2,
      title: "js",
      amount: 2,
      date: new Date("2019-09-05").toLocaleDateString(),
    },
    {
      id: 3,
      title: "jw",
      amount: 6,
      date: new Date("2021-05-05").toLocaleDateString(),
    },
  ];
  const [newArray, setNewArray] = useState(Array);

  useEffect(() => {
    if (fromNewExpense) {
      setNewArray((prev) => [...prev, fromNewExpense]);
    }
  }, [fromNewExpense]);

  console.log(newArray);

  return (
    <div>
      <ExpensedDate Array={newArray} />
      <ExpenseChart chartData={newArray} />
    </div>
  );
}

export default Expense;
