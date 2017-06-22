import React, { Component } from 'react';
import Home from './components/Home';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: []
    }
  }

  componentWillMount() {

  }

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
