import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateImg,
  updateAddress,
  updateCity,
  updateName,
  updateProvince,
  updateZip
} from "../../ducks/reducer";

class Wizard2 extends Component {


  render() {
    return (
      <div className='wizard'>
        <h2 className='wizard-number'>Wizard 2</h2>
        <Link to="/">
          <button className='cancel'
            onClick={() => {
              this.props.updateAddress("")
                this.props.updateCity("")
                this.props.updateProvince("")
                this.props.updateName("")
                this.props.updateZip(null)
                this.props.updateImg("")
            }}
          >
            Cancel
          </button>
        </Link>
        <main className='input-holder'>
          <input
            placeholder="Img URL"
            onChange={e => this.props.updateImg(e.target.value)}
          />
        </main>
        <button className='next' onClick={() => this.props.history.push("/wizard/3")}>
          Next＞＞＞
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, address, city, province, zip, img } = state;
  return { name, address, city, province, zip, img };
};

export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateProvince,
  updateZip,
  updateImg
})(withRouter(Wizard2));
