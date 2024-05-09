import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const FilterButtons = () => {
  const { setFilter } = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => setFilter('all')}>전체</button>
      <button onClick={() => setFilter('completed')}>다함</button>
      <button onClick={() => setFilter('active')}>얼른하셈</button>
    </div>
  );
};