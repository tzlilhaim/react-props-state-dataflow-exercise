import React, { Component } from 'react';
import './App.css';
import Company from './components/Company'

  class App extends Component {
    render() {
  
      let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]
  
      return (
        <Company name={companies[0].name} revenue={companies[0].revenue} />
      )
    }
  }

export default App;
