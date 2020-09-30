import React, { Component } from "react"

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map((r) => {
          return (
            <h3 key={r.name}>{`${r.name} has a reservation on ${r.day} @ ${r.time}`}
              </h3>
          )
        })}
      </div>
    )
  }
}

export default Calendar
