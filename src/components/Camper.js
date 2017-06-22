import React from 'react';
import CamperItem from './camperItem';
import '../App.css';

class Camper extends React.Component{
  render() {
    let camperItems = this.props.campers.map((camper, i) => {
      return (
        <CamperItem camper={camper} key={i} index={i} />
      );
    })
    return(
      <div className="container">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>Points in the last 30days</th>
              <th>Alltime Points in the curriculum</th>
            </tr>
          </thead>
          {camperItems}
        </table>
      </div>
    );
  }
}

export default Camper;