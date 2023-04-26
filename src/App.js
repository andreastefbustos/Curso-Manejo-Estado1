import React from 'react';
import { UseReducer } from './UseReducer';
import { UseState } from './UseState';
import { ClassState } from './ClassState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseReducer name="UseReducer"/>
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;
