import { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";

const initialTodos = [
  { id: 1, text: "가상 할일 1", completed: false },
  { id: 2, text: "가상 할일 2", completed: true },
  { id: 3, text: "가상 할일 3", completed: false }
];

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoContext;