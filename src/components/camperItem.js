import React from 'react';
import '../App.css';

class CamperItem extends React.Component{
  render() {
    return(
      <tr>
        <th scope="row">{this.props.count}</th>
        <td><img className="rounded-circle" src={this.props.camper.img} alt="Camper.avatar" width="40rem" height="40rem" /> {this.props.camper.username}</td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    );
  }
}

export default CamperItem;