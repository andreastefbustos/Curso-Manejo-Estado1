import React from 'react';
import { UseReducer } from './UseState';
import { ClassState } from './ClassState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseReducer name="UseReducer"/>
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;
