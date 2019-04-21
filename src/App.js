import React, { Component } from 'react';
import './App.css';
import Company from './components/Company'
import Wardrobe from './components/Wardrobe';
import Wardrobe2 from './components/Wardrobe2';
import Calendar from './components/Calendar';
import Register from './components/Register';
import Hudini from './components/Hudini';
import Home from './components/Home';
import Landing from './components/Landing';

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }],
      reservations: [
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }],
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: false,
      currentPage: "Landing"
    }
  }
  // SPOT-CHECK-2: 
  //  your generateCompanyTags function here 

  // SPOT-CHECK-3:
  // your upperCase function here

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }]



    return (<div>
      <div className="exercise" id="spotcheck-1">
        <label>spotcheck-1:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-2">
        <label>spotcheck-2:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-3">
        <label>spotcheck-3:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-4">
        <label>spotcheck-4:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-5">
        <label>spotcheck-5:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-6">
        <label>spotcheck-6:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="spotcheck-7">
        <label>spotcheck-7:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="ex-1">
        <label>Exercise 1:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="ex-2">
        <label>Exercise 2:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="ex-3">
        <label>Exercise 3:</label>
        {/* YOUR CODE HERE */}
      </div>
      <div className="exercise" id="ex-4">
        <label>Exercise 4:</label>
        {/* YOUR CODE HERE */}
      </div>
    </div>
    )
  }
}

export default App;
