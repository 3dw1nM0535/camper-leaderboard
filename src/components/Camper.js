import React from 'react';
import CamperItem from './camperItem';
import '../App.css';

class Camper extends React.Component{
  
  render() {
    let count = 1;
    let camperItems = this.props.recent.map((camper, i) => {
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
              <th>Points in the last 30days</th>
              <th>Alltime Points in the curriculum <span onClick={() => this.sortingHandler(this.props.recent.alltime)}></span></th>
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