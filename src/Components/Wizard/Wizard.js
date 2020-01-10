import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateProvince,
  updateZip
} from "../../ducks/reducer";

class Wizard extends Component {

 
  render() {
    return (
      <div>
        <h2>Wizard 1</h2>
        <Link to="/">
          <button
            onClick={() => {
              this.props.updateAddress("")
                this.props.updateCity("")
                this.props.updateProvince("")
                this.props.updateName("")
                this.props.updateZip(null)
            }}
          >
            Cancel
          </button>
        </Link>
        <main>
          <input
            placeholder="name"
            onChange={e => this.props.updateName(e.target.value)}
          />
          <input
            placeholder="address"
            onChange={e => this.props.updateAddress(e.target.value)}
          />
          <input
            placeholder="city"
            onChange={e => this.props.updateCity(e.target.value)}
          />
          <input
            placeholder="state"
            onChange={e => this.props.updateProvince(e.target.value)}
          />
          <input
            placeholder="zipcode"
            onChange={e => this.props.updateZip(e.target.value)}
          />
        </main>
        <button onClick={() => this.props.history.push("/wizard/2")}>
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, address, city, province, zip } = state;
  return { name, address, city, province, zip };
};

export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateProvince,
  updateZip
})(withRouter(Wizard));
