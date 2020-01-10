import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
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

class Wizard3 extends Component {
  add() {
    Axios.post("api/houses/", {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.province,
      zip: this.props.zip,
      img: this.props.img,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    }).then(
      alert("Home added sucessfully"),
      this.props.history.push("/")
    );
  }

  render() {
    return (
      <div className='wizard'>
        <h2 className='wizard-number'>Wizard 3</h2>
        <Link to="/">
          <button className='cancel'
            onClick={() => {
              this.props.updateAddress("");
              this.props.updateCity("");
              this.props.updateProvince("");
              this.props.updateName("");
              this.props.updateZip(null);
              this.props.updateImg("");
              this.props.updateMortgage("");
              this.props.updateRent("");
            }}
          >
            Cancel
          </button>
        </Link>
  <h3 className='rent'>Recomended Rent: ${this.props.mortgage * 1.25}</h3>
        <main className='input-holder'>
          <input
            placeholder="Mortgage"
            onChange={e => this.props.updateMortgage(e.target.value)}
          />
          <input
            placeholder="Rent"
            onChange={e => this.props.updateRent(e.target.value)}
          />
        </main>
        <button className='next' onClick={() => this.add()}>＞＞Add Property!＜＜</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, address, city, province, zip, img, mortgage, rent } = state;
  return { name, address, city, province, zip, img, mortgage, rent };
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
})(withRouter(Wizard3));
