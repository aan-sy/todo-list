import React, { useState } from 'react';
import Add from '../Add/Add';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id : '123',
      text: '1day planner 만들기',
    },
    {
      id : '234',
      text: '점심 먹기',
    },
  ])

  const handleAddTodo = (newTodo) => {setTodos(todos => [...todos, newTodo]);}
  const handleDeleteTodo = (id) => {setTodos(todos => todos.filter(todo => todo.id !== id))}

  return (
    <section>
      <ul>
        {todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />)}
      </ul>
      <section>
        <Add onAdd={handleAddTodo} />
      </section>
    </section>
  );
}

