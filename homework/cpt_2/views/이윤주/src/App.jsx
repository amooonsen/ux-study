import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoProvider } from "./contexts/TodoContext";
import { FilterButtons } from "./components/FilterButtons";
import { TodoList } from "./components/TodoList";

import { ImageProvider } from './contexts/ImageContext';
import {ImageUpload} from './components/ImageUpload';
import {Gallery} from './components/Gallery';

function App() {
  return (
    <>
      <TodoProvider>
        <h1>오늘 할 일</h1>
        <TodoForm />
        <FilterButtons />
        <TodoList />
      </TodoProvider>
      <ImageProvider>
        <div>
          <h1>Image Gallery</h1>
          <ImageUpload />
          <Gallery />
        </div>
      </ImageProvider>
    </>
  );
}

export default App;
