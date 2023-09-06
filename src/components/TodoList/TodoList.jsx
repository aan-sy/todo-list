import React, { useState } from 'react';
import { GoTrash } from 'react-icons/go';
import Add from '../Add/Add';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id : '123',
      text: '1day planner 만들기',
      status: 'todo',
      startTime: '',
      endTime: ''
    },
    {
      id : '234',
      text: '점심 먹기',
      status: 'todo',
      startTime: '',
      endTime: ''
    },
  ])

  const handleAddTodo = (newTodo) => {setTodos(todos => [...todos, newTodo]);}
  const handleDeleteTodo = (deleted) => {setTodos(todos => todos.filter(todo => todo.id !== deleted.id))}
  const handleUpdateTodo = (updated) => {setTodos(todos => todos.map(todo => todo.id === updated.id ? updated : todo))};

  const handleDeleteAll = () => {setTodos(todos => todos.filter(todo => todo.status === 'todo'))};

  return (
    <section>
      <h3>Todo</h3>
      <ul>
        {todos.map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDeleteTodo} 
            onUpdate={handleUpdateTodo}
          />))}
      </ul>
      <section>
        <button onClick={handleDeleteAll}><GoTrash /></button>
        <Add onAdd={handleAddTodo} />
      </section>
    </section>
  );
}
