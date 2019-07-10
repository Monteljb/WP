import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }

    this.handleClickAge = this.handleClickAge.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);

  }

  handleClickAge() {
      this.setState({ sortBy: 'age' }); 
     
  }

  handleClickName() {
      this.setState({ sortBy: 'name' });  
     
  }

  handleClickPoints() {
      this.setState({ sortBy: 'points' });  
      
  }

  handleClickRank() {
      this.setState({ sortBy: 'rank' });  
  }


  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age props={this.handleClickAge}></Age>
          <Name props={this.handleClickName}></Name>
          <Points props={this.handleClickPoints}></Points>
          <Rank props={this.handleClickRank}></Rank>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

