import Article from "./Article"
import React, { Component } from "react"
import Item from "./Item"

class Wardrobe extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]

    return wardrobe.map((item,index) => {
      return <Article info={item} key={`sp4_${index}`}/>
    })
  }
}

export default Wardrobe
