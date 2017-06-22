import React from 'react';
import CamperItem from './camperItem';
import '../App.css';

class Camper extends React.Component{
  allRecents() {
    this.props.recents();
  }
  allTimes() {
    this.props.alltimes();
  }
  render() {
    let count = 1;
    let camperItems = this.props.dynamics.map((camper, i) => {
      return (
        <CamperItem count={count++} camper={camper} key={i} index={i} />
      );
    });
    return(
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th><span onClick={this.allRecents.bind(this)}>Points in the last 30days</span></th>
              <th><span onClick={this.allTimes.bind(this)}>Alltime Points in the curriculum</span></th>
            </tr>
          </thead>
          <tbody>
            {camperItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Camper;