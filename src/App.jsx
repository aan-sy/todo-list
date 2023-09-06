import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'todo', 'completed'];

function App() {
  const [filter, setFilter] = useState('all');
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