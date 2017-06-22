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
      recent: [],
      Alltime: [],
      dynamics: []
    }
  }

  recentUsers() {
    this.setState({dynamics: this.state.recent});
  }

  alltimeUsers() {
    this.setState({dynamics: this.state.Alltime});
  }

  getRecent() {
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({recent: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getAlltime() {
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({Alltime: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getRecent();
  }

  render() {
    return (
      <div>
        <Home />
        <Camper recent={this.state.recent} />
        <Footer />
      </div>
    );
  }
}

export default App;
