import React, { Component } from 'react';
import $ from 'jquery';
import Home from './components/Home';
import Camper from './components/Camper';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: []
    }
  }

  getCampers() {
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({campers: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getCampers();
  }

  handleSort() {
    this.state.campers.sort();
  }

  render() {
    return (
      <div>
        <Home />
        <Camper sort={this.handleSort.bind(this)} campers={this.state.campers} />
        <Footer />
      </div>
    );
  }
}

export default App;
