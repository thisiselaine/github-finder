import React, { Component } from 'react';
import './App.css';

// class based component
class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = false; 

    return (
      <div className='App'>
        <h1>My App</h1>
        { loading ? <h4> Loading... </h4> : <h1>Hello {showName && name}</h1>}
      </div> 
    );
  }
}

export default App;
