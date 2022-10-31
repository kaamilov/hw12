import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "PLUS") {
    return state + 1;
  }
  if (action.type === "MINUS") {
    if (state > 0) {
      return state - 1;
    }
  }
  return state
}

// let action = {
//     type : 'PLUS'
// }

// const initialState = {
//   counter: 0,
// };

function Counter() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);

  function plusFunc() {
    dispatchCounter({ type: "PLUS" });
  }

  function minusFunc() {
    dispatchCounter({ type: "MINUS" });
    // setCounter((prevState) => prevState - 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={plusFunc}>+</button>
      <button onClick={minusFunc}>-</button>
    </div>
  );
}

export default Counter;
