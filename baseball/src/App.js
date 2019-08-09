import React from 'react';
import './App.css';
import Display from './Components/Display'

function App() {
  return (
    <div>
      <Display strikes={2} balls={3}/>
    </div>
  );
}

export default App;
