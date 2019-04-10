import React, { Component } from 'react';
import './App.css';
import Company from './components/Company'

  class App extends Component {
    generateCompanyTags(companies) {
      let companyTags = []
      for (let c of companies) {
        companyTags.push(<Company name={c.name} revenue={c.revenue} />)
      }
      return companyTags
    }
    render() {
  
      let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]

        
  
      return (<div>
        <Company name={companies[0].name} revenue={companies[0].revenue} />
        {this.generateCompanyTags(companies)}
        </div>
      )
    }
  }

export default App;
