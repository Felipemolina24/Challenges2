import React from 'react';
import { useTodo } from './useTodo'
import TodoList from './TodoList';

const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, countTodos, countPendingTodos } = useTodo();
  const [newTodo, setNewTodo] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTodo({
      id: new Date().getTime(),
      description: newTodo,
      done: false
    });
    setNewTodo('');
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <button>Agregar</button>
      </form>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} />
      <p>Total de tareas: {countTodos}</p>
      <p>Tareas pendientes: {countPendingTodos}</p>
    </div>
  );
};

export default TodoApp;
