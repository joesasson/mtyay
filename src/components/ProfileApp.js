import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class ProfileApp extends Component {

  handleLogOut(){
    sessionStorage.clear()
    browserHistory.push('/')
  }

  render(){
    return(
      <div className="Profile">
        <button value="Log Out" onClick={this.handleLogOut.bind(this)}>Log Out</button><br/>
        This is *your* profile.
        { this.props.children }
      </div>

    )
  }
}

export default ProfileApp
