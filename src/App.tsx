import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
