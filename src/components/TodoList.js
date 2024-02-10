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
    <div className='p-4'>
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={addTodo}>
        Add Todo
      </button>
      <ul className='mt-4'>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mt-2 p-2 bg-orange-200 shadow-md">
          <input
            type="checkbox"
            className="form-checkbox mr-4"
            checked={todo.completed}
            onChange={(e) => {
              setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: e.target.checked } : t));
            }}
          />
          <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'} flex-grow text-left mr-4`}>
            {todo.title}
          </span>

          {/* delete button for each item */}
          <button className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>
            Delete
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;