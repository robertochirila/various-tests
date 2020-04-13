import React from 'react';
import './App.css';
import { MainForm } from './components/MainForm'
import { ListForm } from './components/ListForm'
import { Provider } from 'react-redux'
import store from './store'

/**
 * We want to pass to this component thhe MainForm component
 * that will handle all the logic and pass that logic through props to the child components
 */

/**
 * Redux template 
 * 1. Install redux, react-redux, redux-thunk
 * 2. Create the store
 * 3. Wrapp the components in a provider and pass the store
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
        <Provider store={store}>
          <ListForm />
        </Provider>
      </div>
    </div>
  );
}

export default App;
