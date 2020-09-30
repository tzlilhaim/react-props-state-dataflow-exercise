import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map(i=>{return <Item item={i.item} price={i.price} discount={this.props.shouldDiscount?i.discount:null}/>})

    }
}

export default Home