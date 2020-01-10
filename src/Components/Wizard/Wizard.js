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
import './wizard.css'

class Wizard extends Component {

 
  render() {
    return (
      <div className='wizard'>
        <div className='vert-sep'>
        <h2 className='wizard-number'>Wizard 1</h2>
        <Link to="/">
          <button className='cancel'
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
          </div>
        <main className='input-holder'>
          <input
            placeholder="Name"
            onChange={e => this.props.updateName(e.target.value)}
            maxLength='30'
            value={this.props.name}
          />
          <input
            maxLength='100'
            placeholder="Address"
            onChange={e => this.props.updateAddress(e.target.value)}
            value={this.props.address}
          />
          <input
            maxLength='100'
            placeholder="City"
            onChange={e => this.props.updateCity(e.target.value)}
            value={this.props.city}
          />
          <input
            maxLength='2'
            placeholder="State"
            onChange={e => this.props.updateProvince(e.target.value)}
            value={this.props.province}
          />
          <input
            type='number'
            placeholder="Zip Code"
            onChange={e => this.props.updateZip(e.target.value)}
            value={this.props.zip}
          />
        </main>
        <button className='next' onClick={() => this.props.history.push("/wizard/2")}>
          Next＞＞＞
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
