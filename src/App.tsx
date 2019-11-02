import React from 'react';
import logo from './logo.svg';
import './App.css';
import Corgi from './components/corgiphoto'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with TypeScript!
        </a>
      </header>
      <Corgi/>
    </div>
  );
}

export default App;
