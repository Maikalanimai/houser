import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import Axios from "axios";
import {connect} from 'react-redux'
import {
  updateImg,
  updateAddress,
  updateCity,
  updateName,
  updateProvince,
  updateZip,
  updateMortgage,
  updateRent
} from "../../ducks/reducer";
import './dashboard.css'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
    this.updateHouses = this.updateHouses.bind()
  }

  componentDidMount() {
    Axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
    this.props.updateAddress("")
      this.props.updateCity("")
      this.props.updateProvince("")
      this.props.updateName("")
      this.props.updateZip(null)
      this.props.updateImg("")
      this.props.updateMortgage("")
      this.props.updateRent("")
  }

  componentDidUpdate(oldProps){
    if(oldProps !== this.props){
      Axios.get("/api/houses").then(res => {
        this.setState({
          houses: res.data
        });
      });
    }
  }

  updateHouses = () => {
    Axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  };

  render() {
    return (
      <div className='primary'>
        <header>
          <h2>Dashboard</h2>
        <Link to="/wizard/1">
          <button>Add New Property</button>
        </Link>
        <hr/>
        <h3>Home Listings</h3>
        </header>
        {this.state.houses.map((e, i) => {
          return <House info={e} index={i} updateHouses={this.updateHouses}/>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {name} =state;
  return {name}
}

export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateProvince,
  updateZip,
  updateImg,
  updateMortgage,
  updateRent
})(Dashboard);
