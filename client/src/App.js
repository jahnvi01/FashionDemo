import React, { Component } from 'react';
import './App.css';
import Choice from './components/choice';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>explore your choices here  :)</h2>
      <Choice />
      </div>
    );
  }
}

export default App;
