import React, { Component } from 'react';
import { Navbar } from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

// class based component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
      </div> 
    );
  }
}

export default App;
