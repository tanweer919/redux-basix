import React from "react";
import { increment, decrement } from "./actions";
import { connect } from "react-redux";

const CounterOne = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer,
  };
};

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterOne);
