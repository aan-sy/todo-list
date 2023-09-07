import './App.css';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const filters = ['all', 'todo', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleFilter = filter => setFilter(filter);

  return (
    <DarkModeProvider>
      <Header />
      <Nav filters={filters} filter={filter} onChangeFilter={handleFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;