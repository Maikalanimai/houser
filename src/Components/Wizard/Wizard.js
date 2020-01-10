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
        <main className='input-holder'>
          <input
            placeholder="name"
            onChange={e => this.props.updateName(e.target.value)}
            maxlength='30'
          />
          <input
            maxlength='100'
            placeholder="address"
            onChange={e => this.props.updateAddress(e.target.value)}
          />
          <input
            maxlength='100'
            placeholder="city"
            onChange={e => this.props.updateCity(e.target.value)}
          />
          <input
            maxlength='2'
            placeholder="state"
            onChange={e => this.props.updateProvince(e.target.value)}
          />
          <input
            type='number'
            placeholder="zipcode"
            onChange={e => this.props.updateZip(e.target.value)}
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
