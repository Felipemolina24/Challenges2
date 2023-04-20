import React from 'react';

export const TodoItem = ({ todo, onToggleTodo }) => {

    const handleToggleTodo = () => {
        console.log('clicked');
        const updatedTodo = {
            ...todo,
            done: !todo.done
        }
        onToggleTodo(updatedTodo);
    }

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.done ? 'completed' : ''}`}>
            <span className="todo-description align-self-center" onClick={handleToggleTodo}>{todo.description}</span>
            <button className='btn btn-danger' onClick={() => { }}>Borrar</button>
        </li>
    );
}


