import Expense from "./components/Expense-components/Expense";
import NewExpense from "./components/NewExpense-components/NewExpense";
import { useState } from "react";
import Modal from "./components/UI/Modal";
import Login from "./components/Login/Login";
import Practice from "./components/practice.js/practice";

export default function App() {
  const [expensData, setExpenseData] = useState();
  const [year, setYear] = useState("");
  const [modal, setModal] = useState(false);

  function saveExpenseDataHandler(data) {
    const fromChild = data;

    setExpenseData(fromChild);
  }

  function onSaveYearValue(data) {
    setYear(() => data);
  }
  function toggleModal() {
    setModal((prev) => !prev);
  }
  console.log(year);
  return (
    <div className="App">
      <Login />
      <Practice />
      <button onClick={toggleModal}> 모달 띄우기</button>
      {modal && <Modal closeModal={toggleModal} />}
      <h1> ms</h1>
      <NewExpense
        onSaveChildData={saveExpenseDataHandler}
        onSaveYearValueToMain={onSaveYearValue}
      />
      <Expense fromNewExpense={expensData} yearValue={year} />
    </div>
  );
}
