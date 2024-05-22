import { useState } from 'react';
import { Todos, TodoList } from 'components';

export const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  const getTodos = query => {
    const newTask = {
      text: query,
      id: id,
    };
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, newTask];
      return updatedTodos;
    });
    setId(prevId => prevId + 1);
  };
  return (
    <>
      <Todos onSubmit={getTodos} />
      <TodoList todos={todos} />
    </>
  );
};
