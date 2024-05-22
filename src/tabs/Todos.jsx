import { Form, TodoList } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form />
      <TodoList />
    </>
  );
};
