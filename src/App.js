import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


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

            <Router>
                <div>
                    <div className="text-center buttons">
                        <Link to="/age"> <Age props={{ onClick: this.handleClickAge }}></Age></Link>
                        <Link to="/name"> <Name props={{ onClick: this.handleClickAge }}></Name></Link>
                        <Link to="/points"> <Points props={{ onClick: this.handleClickAge }}></Points></Link>
                        <Link to="/rank"> <Rank props={{ onClick: this.handleClickAge }}></Rank></Link>
                    </div>

                    <hr/>
                    <Switch>
                        <Route exact path="/" render={props =>
                            (<Table {...props} sortBy={this.state.sortBy} />)
                        } />
                        <Route path="/age" render={props =>
                            (<Table {...props} sortBy={'age'} />)
                        } />
                        <Route path="/name" render={props =>
                            (<Table {...props} sortBy={'name'} />)
                        } />
                        <Route path="/points" render={props =>
                            (<Table {...props} sortBy={'points'} />)
                        } />
                        <Route path="/rank" render={props =>
                            (<Table {...props} sortBy={'rank'} />)
                        } />
                    </Switch>
                </div>
            </Router>
      </div>
    );
  }
}

