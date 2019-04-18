import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render(){
        return this.props.store.map(s=><Item name={s.item} price={s.price} />)
    }
}

  export default Home