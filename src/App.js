import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi, {this.props.name}
      </div>
    );
  }
}

export default App;
