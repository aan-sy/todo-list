import React, { useState } from 'react';
import Add from '../Add/Add';

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

  const AddTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo]);
  }

  return (
    <section>
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
      </ul>
      <section>
        <Add onAdd={AddTodo} />
      </section>
    </section>
  );
}

