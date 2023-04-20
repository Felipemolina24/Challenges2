import React from 'react';

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span className={todo.done ? 'completed' : ''}>{todo.description}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
