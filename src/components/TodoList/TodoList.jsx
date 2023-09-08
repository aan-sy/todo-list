import styles from './TodoList.module.css'
import React, { useEffect, useState } from 'react';
import { GoTrash } from 'react-icons/go';
import Add from '../Add/Add';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);

  const addTodo = (newTodo) => {setTodos(todos => [...todos, newTodo]);}
  const deleteTodo = (deleted) => {setTodos(todos => todos.filter(todo => todo.id !== deleted.id))}
  const updateTodo = (updated) => {setTodos(todos => todos.map(todo => todo.id === updated.id ? updated : todo))};
  const deleteAll = () => {setTodos(todos => todos.filter(todo => todo.status === 'todo'))};

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const uncompletedTodos = filterTodos(todos, 'todo');
  const completedTodos = filterTodos(todos, 'completed');

  return (
    <section className={styles.todoList}>
      <div className={styles.todoContent}>
        {(filter === 'all' || filter === 'todo') && 
          <>
            <h3 className={styles.todoTitle}>
              Todo <span className={styles.count}>{uncompletedTodos.length}</span>
            </h3>
            <ul className={styles.todoGroup}>
              {uncompletedTodos.map(todo => <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />)}
            </ul>
          </>
        }
        {(filter === 'all' || filter === 'completed') && 
          <>
            <h3 className={styles.todoTitle}>
            Completed <span className={styles.count}>{completedTodos.length}</span>
            </h3>
            <ul className={styles.todoGroup}>
              {completedTodos.map(todo => <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />)}
            </ul>
          </>
        }
      </div>
      <div className={styles.todoControl}>
        <button className={styles.btnDeleteAll} onClick={deleteAll}><GoTrash /></button>
        <Add onAdd={addTodo} />
      </div>
    </section>
  );
}

function filterTodos(todos, filter) {
  return todos.filter(todo => todo.status === filter);
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
  

