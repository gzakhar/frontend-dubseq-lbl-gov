import React, { Component } from 'react';
import Controller from './Controller';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DubSeq Viewer</h1>
        </header>
        <Controller />
      </div>
    );
  }
}

export default App;
