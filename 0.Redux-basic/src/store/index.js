import { createStore } from "redux"; // 1. createStore 를 import

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  // 2. 리듀서 함수를 만든다. (마치, useReducer 처럼) (초기값 지정은, 맘대로)
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "USERINPUT") {
    return {
      counter: state.counter + action.number,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// 3.리듀서 함수를 토대로, store 를 만든다. (마치 useReducer 를 사용하듯)

const store = createStore(counterReducer);

// 4. 이제, 리액트 앱과, store 를 연결하여, 리액트 앱에서 사용할 수 있도록 만든다.
//  그러므로, store 를, 리액트 엡에 공급한다!

export default store;

// App.js 로 가자 [앱을 감싸는 최상위 컴포넌트로!]
