import React, { useContext, useReducer, useState } from "react";
import TodoContext from "./views/유람/js/TodoContext";
import TodoReducer from "./views/유람/js/todoReducer";

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const { todos, dispatch } = useContext(TodoContext);
  
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== "") {
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setNewTodo("");
      }
    };
  
    return (
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
              <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>Toggle</button>
              <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Todo;