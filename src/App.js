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
      Alltime: []
    }
    this.handleSort = this.handleSort.bind(this);
  }

  getRecent() {
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

  handleSort() {
    let arr = this.state.recent;
    let sort = arr.sort(function(a, b) {
      return a.alltime - b.alltime;
    });
    this.setState({campers: sort});
  }

  componentWillMount() {
    this.getCampers();
  }

  render() {
    return (
      <div>
        <Home />
        <Camper sort={this.handleSort} campers={this.state.recent} />
        <Footer />
      </div>
    );
  }
}

export default App;
