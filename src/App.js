import React, { Component } from 'react';
import './App.css';

// class based component
class App extends Component {
  render() {
    // this gives us same output without jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello from React'));
    // use react.fragment whenever you don't have parent element 
    return (
      // this looks like html but is actually jsx 
      // everything has to be enclosed within a parent element
      <div className='App'>
        <h1>Hello from React</h1>
      </div> 
    );
  }
}

export default App;
