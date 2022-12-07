import { useEffect, useState } from "react";

function Practice() {
  const [name, setName] = useState("name");

  function nameChangeHandler(e) {
    setName(() => e.target.value);
  }

  useEffect(() => {
    const setTime = setTimeout(() => {
      if (name == "ms") {
        console.log("correct!");
      } else {
        console.log("wrong!");
      }
    }, 2000);

    return () => {
      clearTimeout(setTime);
    };
  }, [name]);

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => nameChangeHandler(e)}
      />
    </div>
  );
}

export default Practice;
