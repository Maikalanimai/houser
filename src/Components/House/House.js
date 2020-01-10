import React, { Component } from "react";
import Axios from "axios";
import './house.css'

class House extends Component {
  deleteHouse() {
    Axios.delete(`/api/houses/${this.props.info.id}`).then(
      alert("House removed"),
      this.props.updateHouses()
    );
  }
  render() {
    return (
      <div className='house' key={this.props.index}>
        {(this.props.info.img) ? <img className='house-image'alt={this.props.info.name} src={this.props.info.img} />: <img className='house-image' alt='none' src='https://www.battlegroundindy.com/wp-content/uploads/2019/01/no-image-770x466.jpg' />}
        <div className='not-image'>
        <h3>Property Name: {this.props.info.name}</h3>
        <ul>
          <li>Address: {this.props.info.address}</li>
          <li>City: {this.props.info.city}</li>
          <li>State: {this.props.info.state}</li>
          <li>Zip: {this.props.info.zip}</li>
          <li>Mortgage: {this.props.info.mortgage}</li>
          <li>Rent: {this.props.info.rent}</li>
        </ul>
        <button className='delete' onClick={() => this.deleteHouse()}>Delete</button>
        </div>
      </div>
    );
  }
}

export default House;
