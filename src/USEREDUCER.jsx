import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return state + 1;
    case "Minus":
      return state - 1;
    default:
      return "no Match Found";
  }
};
const initialState = 1;

export default function USEREDUCER() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>UseReducer</h1>
      <h1>{state}</h1>
      <button
        onClick={(e) => {
          dispatch({ type: "Add" });
        }}
      >
        Increment
      </button>
      <button
        onClick={(e) => {
          dispatch({ type: "Minus" });
        }}
      >
        Decrement
      </button>
    </>
  );
}
