import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const title = prompt('Todo title:');
    if (title) {
      setTodos([...todos, { id: Date.now(), title, completed: false }]);
    }
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => {
                setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: e.target.checked } : t));
              }}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;