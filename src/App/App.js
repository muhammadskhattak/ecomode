import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Stylesheets/App.css';
import Home from '../Home/Home';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
