import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import Axios from "axios";
import { connect } from "react-redux";
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
import "./dashboard.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      loading: true
    };
    this.updateHouses = this.updateHouses.bind();
  }

  componentDidMount() {
    Axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data,
        loading: false
      });
    });
    this.props.updateAddress("");
    this.props.updateCity("");
    this.props.updateProvince("");
    this.props.updateName("");
    this.props.updateZip(null);
    this.props.updateImg("");
    this.props.updateMortgage(null);
    this.props.updateRent(null);
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      Axios.get("/api/houses").then(res => {
        this.setState({
          houses: res.data,
          loading: false
        });
      });
    }
  }

  updateHouses = () => {
    Axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data,
        loading: false
      });
    });
  };

  render() {
    return (
      <div className="primary">
        <header className="dash-head">
          <div className="vert-sep">
            <h2 className="dash-title">Dashboard</h2>
            <Link to="/wizard/1">
              <button className="add-property">Add New Property</button>
            </Link>
          </div>
          <hr />
          <h3 className="listing">Home Listings</h3>
        </header>
        {this.state.loading === true ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (<div>{
          this.state.houses.map((e, i) => {
            return (
              <House info={e} index={i} updateHouses={this.updateHouses} />
            );
          })}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name } = state;
  return { name };
};

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
