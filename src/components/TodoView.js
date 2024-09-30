import React, { useContext, useState } from 'react';
import { TodoContext } from '../model/TodoContext';
import { addTodo, removeTodo } from '../controller/TodoController';
import './TodoView.css'; // Import CSS

const TodoView = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    addTodo(dispatch, todoText);
    setTodoText('');
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      
      {/* Judul di atas input */}
      <label className="input-label">Tugas Baru:</label>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Tambahkan tugas baru..."
      />
      <button onClick={handleAddTodo} className="add-button">
        Tambah Tugas
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(dispatch, todo.id)}
              className="remove-button"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
