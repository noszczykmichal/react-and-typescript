import React from 'react';
import TodoList from './Components/ToDoList';


const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }, {id: 't2', text: 'Create a new app'}];
  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
