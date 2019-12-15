import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import {ListContextProvider} from './context/index';

const App = () => {
  return (
      <ListContextProvider>
        <div className="App">
          <h2>Todo List</h2>
          <TodoList></TodoList>
        </div>
      </ListContextProvider>
  );
}

export default App;
