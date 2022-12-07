import ExpensedDate from "./ExpensedDate";
import "./Expense.css";
import { useEffect, useState } from "react";

function Expense(props) {
  const { fromNewExpense, yearValue } = props;
  const Array = [
    { id: 1, title: "ms", amount: 3, date: "2020-10-05" },
    { id: 2, title: "js", amount: 2, date: "2019-10-05" },
    { id: 3, title: "jw", amount: 6, date: "2021-10-05" },
  ];
  const [newArray, setNewArray] = useState(Array);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (fromNewExpense) {
      setNewArray((prev) => [...prev, fromNewExpense]);
    }
  }, [fromNewExpense]);

  if (yearValue) {
    const newAA = Array.map((item) => ({
      ...item,
      date: new Date(item.date).getFullYear().toString(),
    }));

    const newA = newAA.filter((item) => item.date === yearValue);

    console.log(newA);
  }

  return (
    <div>
      <ExpensedDate Array={newArray} />
    </div>
  );
}

export default Expense;
