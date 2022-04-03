import React, { useState } from 'react';
import TodoList from './Components/ToDoList';
import NewTodo from './Components/NewTodo';
import {Todo } from './todo.models';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (toDotext: string) => {
    setTodos(prevTodos=> [...prevTodos, {id: Math.random().toString(), text: toDotext } ])
  };
  
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
