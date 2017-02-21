 import React, { Component } from 'react'
import { Link } from 'react-router'

export default function OptionButtons(props){
  return(
    <div className="Buttons">
      <Link to={`${props.conn.requester_commute.profile.id}`}><button>Checkout {props.conn.requester_commute.profile.name}'s profile!</button></Link><br/>
      <button onClick={props.acceptInvitation} disabled={props.invitationAccepted}>Accept {props.conn.requester_commute.profile.name}'s invitation </button><br/>
      <button onClick={props.declineInvitation} disabled={props.invitationDeclined}>Decline {props.conn.requester_commute.profile.name}'s invitation </button>
    </div>

  )
}