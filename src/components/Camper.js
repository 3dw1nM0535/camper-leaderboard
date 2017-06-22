import React from 'react';
import CamperItem from './camperItem';
import '../App.css';

class Camper extends React.Component{
  sortItems() {
    this.props.sort();
  }
  render() {
    let count = 1;
    let camperItems = this.props.campers.map((camper, i) => {
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
              <th onClick={this.sortItems.bind(this)}>Camper Name</th>
              <th>Points in the last 30days</th>
              <th>Alltime Points in the curriculum</th>
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