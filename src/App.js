import React from 'react';
import './App.css';
import { MainForm } from './components/MainForm'

/**
 * We want to pass to this component thhe MainForm component
 * that will handle all the logic and pass that logic through props to the child components
 */

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Testing Various Features</h1>
      </header>
      <div className="wrapper">
        <h4>Let's begin with a multi step form !</h4>
        <MainForm />
      </div>
    </div>
  );
}

export default App;
