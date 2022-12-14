import Expense from "./components/Expense-components/Expense";
import NewExpense from "./components/NewExpense-components/NewExpense";
import { useCallback, useState } from "react";
import Modal from "./components/UI/Modal";
import Login from "./components/Login/Login";
import Practice from "./components/practice.js/practice-useEffect";
import GetUserInfo from "./components/practice.js/practice-useReducer";
import UseContextPractice from "./components/practice.js/practice-context";
import ForUseCallback from "./components/practice.js/for-useCallback";

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

  const funA = useCallback(function funA() {
    console.log("a");
  }, []);

  return (
    <div className="App">
      <ForUseCallback funA={funA} />
      <UseContextPractice></UseContextPractice>
      <Login />
      <GetUserInfo />
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
