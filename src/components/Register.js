import React, { Component } from "react"

class Register extends Component {
  render() {
    return (
      <div id="register">
        <h4>You cannot use:</h4>
        {this.props.reservations.map((r) => {
          return <div>{`${r.day} @ ${r.time}`}</div>
        })}
      </div>
    )
  }
}

export default Register
