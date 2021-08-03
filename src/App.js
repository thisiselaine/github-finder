import React, { Component } from 'react';
import { Navbar } from './components/layout/Navbar';
// eslint-disable-next-line
import Users from './components/users/Users';
import './App.css';

// class based component
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
