import { useReducer } from "react";

function userInfoReducer(state, action) {
  if (action.type == "GET_INFO") {
    return { name: "ms", age: 35, address: action.address }; // "객체값을 갖을 수 있다."
  }
  if (action.type == "DELETE_INFO") {
    return { name: null, age: null };
  }
}

function GetUserInfo() {
  const [userInfo, dispatch] = useReducer(userInfoReducer, {
    name: "",
    age: null,
  });

  function getInfo() {
    dispatch({ type: "GET_INFO", address: "busan" });
  }
  function deleteInfo() {
    dispatch({ type: "DELETE_INFO" });
  }
  console.log(userInfo);
  return (
    <div>
      <button onClick={getInfo}> 얻기 </button>
      <button onClick={deleteInfo}> 지우기 </button>
    </div>
  );
}

export default GetUserInfo;
