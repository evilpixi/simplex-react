import React, { Component } from 'react';
import './App.css'
import VarPanel from './components/varPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simplex React</h1>
        <VarPanel />
      </div>
    );
  }
}

export default App;