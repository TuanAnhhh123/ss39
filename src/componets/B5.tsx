import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

interface Todo {
  id: number;
  text: string;
}

const B5: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = useCallback((event: FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() === '') return;

    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);
    setNewTodo('');
  }, [newTodo]);


  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a new todo"
          style={{ padding: '10px', width: '200px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Add
        </button>
      </form>
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default B5;
