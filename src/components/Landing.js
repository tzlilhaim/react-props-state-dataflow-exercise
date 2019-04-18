import React, { Component } from 'react';

class Landing extends Component {
    hottestItem = (store) => {
        let hottest = store.find(s => s.hottest === true)
        return hottest.item
    }

    render() {
        return <div>Welcome, {this.props.user}! The hottest item is {this.hottestItem(this.props.store)}</div>
    }
}

export default Landing