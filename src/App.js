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
    this.recentUsers = this.recentUsers.bind(this);
    this.alltimeUsers = this.alltimeUsers.bind(this);
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
        this.setState({recent: data, dynamics: data});
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
    this.getAlltime();
  }

  render() {
    return (
      <div>
        <Home />
        <Camper dynamics={this.state.dynamics} recents={this.recentUsers} alltimes={this.alltimeUsers} />
        <Footer />
      </div>
    );
  }
}

export default App;
