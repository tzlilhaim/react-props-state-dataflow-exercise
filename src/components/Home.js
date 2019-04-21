import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    discount=(item)=> item.price * (1 - item.discount)
    
    render(){
        return this.props.discount? 
        this.props.store.map(s=><Item name={s.item} price={this.discount(s)} />) :
        this.props.store.map(s=><Item name={s.item} price={s.price} />)
    }
}

  export default Home