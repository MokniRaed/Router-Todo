import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const AddTodo = ({ add }) => {
  const [input, setInput] = useState("");

  const hadd = () => {
    add({
      title: input,
      id: uuid(),
      isDone: false,
    });
  };
  return (
    <div style={{}}>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="set todo"
      />
      <button onClick={() => hadd()}>Add</button>
    </div>
  );
};

export default AddTodo;
