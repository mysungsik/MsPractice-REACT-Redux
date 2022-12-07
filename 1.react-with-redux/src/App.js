import Expense from "./components/Expense-components/Expense";
import NewExpense from "./components/NewExpense-components/NewExpense";
import { useState } from "react";

export default function App() {
  const [expensData, setExpenseData] = useState();
  const [year, setYear] = useState("");

  function saveExpenseDataHandler(data) {
    const fromChild = data;

    setExpenseData(fromChild);
  }

  function onSaveYearValue(data) {
    setYear(() => data);
  }
  console.log(year);
  return (
    <div className="App">
      <h1> ms</h1>
      <NewExpense
        onSaveChildData={saveExpenseDataHandler}
        onSaveYearValueToMain={onSaveYearValue}
      />
      <Expense fromNewExpense={expensData} yearValue={year} />
    </div>
  );
}
