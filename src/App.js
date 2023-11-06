import React from 'react';
import Quiz from './components/Quiz';
import './App.css'
function App() {
  return (
    <div style={{height:"100vh"}} className='conatiner-fluid d-flex flex-wrap justify-content-center align-items-center'>
      <Quiz />
    </div>
  );
}

export default App;