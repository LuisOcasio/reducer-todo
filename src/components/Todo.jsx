import React, { useState, useReducer } from "react";
import { initialState, TodoReducer } from "../reducers/Reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const [title, setTitle] = useState(" ");

  const handleChanges = event => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1>Another Todo</h1>

      {state.map(state => {
        return (
          <div className=
            {state.completed ? "completed" : ""}
            onClick={() => {
              dispatch({ type: "SelectTodo", payload: state.id });
            }}
          >
            {state.item + " "}
          </div>
        );
      })}

      <input
        className="Input"
        type="text"
        name="title"
        value={title}
        onChange={handleChanges}
      />

      <button
        onClick={() => {
          dispatch({ type: "AddTodo", payload: title });
        }}
      >
        Add Todo
      </button>

      <button
        onClick={() => {
          dispatch({ type: "RemoveTodo", payload: title });
        }}
      >
        Remove Todo
      </button>
    </div>
  );
};

export default Todo;
