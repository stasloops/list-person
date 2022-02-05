import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import PersonList from './page/PersonList/PersonList';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <PersonList />
      </BrowserRouter>
    </div>
  );
}

export default App;
