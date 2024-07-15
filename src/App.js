// src/App.js

import React from 'react';
import './App.css';
import QueryForm from './components/QueryForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header my-4">
          <h1>AI-powered Database Query App</h1>
        </header>
        <main>
          <QueryForm />
        </main>
      </Container>
    </div>
  );
}

export default App;