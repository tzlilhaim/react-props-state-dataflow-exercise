import React, { Component } from "react"

class Item extends Component {
  render() {
    const item = this.props.item
    const price = this.props.price
    const discount = this.props.discount
    return (
      <div key={item}>
        {item}: {price}$
        {discount ?<li> discount price: {price*(1-discount)}$</li>:null}
      </div>
    )
  }
}

export default Item
