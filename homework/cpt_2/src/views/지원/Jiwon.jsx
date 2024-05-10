import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import UserCheck from './UserCheck';
import ImageUpload from './ImageUpload';

const Jiwon = () => {
  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>

      <UserCheck></UserCheck>
      <ImageUpload></ImageUpload>
    </>
  );
};

export default Jiwon; 