import React, {Component} from 'react'
import './header.css'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <header className='main-header'>
        <h1 onClick = {() => {
          this.props.history.push('/')
        }}>Houser</h1>
      </header>
    )
  }
}

export default withRouter(Header)