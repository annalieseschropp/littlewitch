import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
