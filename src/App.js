import React, { Component } from 'react';
import Home from './components/Home';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
