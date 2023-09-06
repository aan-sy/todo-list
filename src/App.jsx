import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'todo', 'completed'];
function App() {
  const [filter, setFilter] = useState('all');

  const handleFilter = filter => setFilter(filter);

  return (
    <>
      <Nav filters={filters} filter={filter} onChangeFilter={handleFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;