import React, { Component } from 'react';

class Article extends Component {
  render() {
    let item = `${this.props.info.color} ${this.props.info.type}`
  return <div key={this.props.key}>{item}</div>

  }
}

export default Article