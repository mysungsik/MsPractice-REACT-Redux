import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";
import BasicFormRefac from "./components/Validate/basic-form-refac";

function App() {
  const [tasks, setTasks] = useState([]);
  const [enteredName, setEnteredName] = useState("before N");
  const [enteredPassword, setEnteredPassword] = useState("before P");

  function submitHandler() {
    setEnteredName("after N");
    setEnteredPassword(() => "after P");

    console.log(enteredName);
    console.log(enteredPassword);
  }

  const fecthConfig = {
    url: "https://react-demo-771dc-default-rtdb.firebaseio.com/demo.json",
  };

  function applyData(data) {
    const loadedTasks = [];

    console.log(data);

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }

  const useHttpResult = useHttp(fecthConfig, applyData);

  const { isLoading, error, sendRequest } = useHttpResult;

  useEffect(() => {
    sendRequest();
    console.log(tasks);
  }, []);

  function taskAddHandler(task) {
    setTasks((prevTasks) => prevTasks.concat(task));
  }

  return (
    <React.Fragment>
      <BasicFormRefac />

      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
      <button onClick={submitHandler}> 버튼</button>
    </React.Fragment>
  );
}

export default App;
