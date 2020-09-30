import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
  return <div key={this.props.key}><h4>{this.props.name}</h4><h5>{this.props.revenue}</h5></div>

  }
}

export default SubCompany