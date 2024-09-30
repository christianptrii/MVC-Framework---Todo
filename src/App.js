import React from 'react';
import { TodoProvider } from './model/TodoContext';
import TodoView from './components/TodoView';

function App() {
  return (
    <TodoProvider>
      <TodoView />
    </TodoProvider>
  );
}

export default App;
