import React from "react";
import { increment, decrement } from "./actions";
import { connect } from "react-redux";
const CounterTwo = ({ count, increment }) => {
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer,
  };
};
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo);
