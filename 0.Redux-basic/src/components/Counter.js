import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE_COUNTER" });
  };

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const userinputHandler = (number) => {
    dispatch({ type: "USERINPUT", number: number });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> 증가</button>
        <button onClick={decrementHandler}> 감소 </button>
        <button
          onClick={() => {
            userinputHandler(5);
          }}
        >
          유저인풋
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
