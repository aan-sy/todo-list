import React, { useState } from 'react';
import { GoTrash } from 'react-icons/go';
import Add from '../Add/Add';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
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

  const addTodo = (newTodo) => {setTodos(todos => [...todos, newTodo]);}
  const deleteTodo = (deleted) => {setTodos(todos => todos.filter(todo => todo.id !== deleted.id))}
  const updateTodo = (updated) => {setTodos(todos => todos.map(todo => todo.id === updated.id ? updated : todo))};

  const deleteAll = () => {setTodos(todos => todos.filter(todo => todo.status === 'todo'))};

  const uncompletedTodos = filterTodos(todos, 'todo');
  const completedTodos = filterTodos(todos, 'completed');

  return (
    <section>
      <div>
        {(filter === 'all' || filter === 'todo') && <h3>Todo <span>{uncompletedTodos.length}</span></h3>}
        <ul>
          {(filter === 'all' || filter === 'todo') && uncompletedTodos.map((todo) => (<Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />))}
        </ul>
        {(filter === 'all' || filter === 'completed') && <h3>Completed <span>{completedTodos.length}</span></h3>}
        <ul>
        {(filter === 'all' || filter === 'completed') && completedTodos.map((todo) => (<Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />))}
        </ul>
      </div>
      <div>
        <button onClick={deleteAll}><GoTrash /></button>
        <Add onAdd={addTodo} />
      </div>
    </section>
  );
}

function filterTodos(todos, filter) {
  return todos.filter(todo => todo.status === filter);
}
  

