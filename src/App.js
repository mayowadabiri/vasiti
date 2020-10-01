import React from 'react';
import './App.css';
import Clients from './components/Clients/Clients';
import Experience from './components/Experience/Experience';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Clients />
    </div>
  );
}

export default App;
