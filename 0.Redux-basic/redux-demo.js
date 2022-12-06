const redux = require("redux"); // 1.  임포트하고

const counterReducer = (state = { counter: 0 }, action) => {
  // 3. 리듀서 함수(동작할 함수) 만들고 (state = 현재 상태)

  if (action.type === "increment") {
    return {
      counter: state.counter + 1, // 4. 새로운 상태 를 return 하는 리듀서함수 완성 한다.
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return;
};

let store = redux.createStore(counterReducer); // 2. 저장소 만들어서   // 5. 저장소에, 리듀서 함수를 넣어, 상태를 조작

const subScriber = () => {
  // 6 구독자를 만들고, 저장소의 값을 가져와보자(추후 컴포넌트가 될것이다.)
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(subScriber); // 7. "구독자"가, state 가 변경된 값을 얻기 위해, "subscribe 메서드를 사용한다."
//  "subscribe"는, store의 변화가 일어날때, 그 함수(추후, 컴포넌트 즉 UI)가 실행된다.

store.dispatch({ type: "increment" }); // 8. "특수한 값을 가진 action"을 "dispatch"로 "리듀서 함수"에 전달한다.

// 9. 리듀서 함수에서는 action.type 으로 dispatch된 action 을 받고, 그에 따른 조치를 취한다.

store.dispatch({ type: "decrement" });
