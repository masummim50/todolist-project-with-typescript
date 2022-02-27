import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBox from './components/TodoBox';

function App() {
  return (
    <div className="App flex justify-center mt-6 p-2">
      <TodoBox/>
    </div>
  );
}

export default App;
