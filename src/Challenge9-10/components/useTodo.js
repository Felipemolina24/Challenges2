import { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Hacer los Challenges',
    done: false
  }
]

const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] ADD TODO':
      return [...initialState, action.payload]
    case '[TODO] DELETE TODO':
      return initialState.filter(todo => todo.id !== action.payload)
    case '[TODO] TOGGLE TODO':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      });
    default:
      return initialState;
  }
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] ADD TODO',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] DELETE TODO',
      payload: id
    }
    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] TOGGLE TODO',
      payload: id
    }
    dispatch(action)
  }

  const countTodos = todos.length;
  const countPendingTodos = todos.filter(todo => !todo.done).length;

  return { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, countTodos, countPendingTodos };
}
