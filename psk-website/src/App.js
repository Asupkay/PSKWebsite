import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Brothers from './pages/brothers';
import WhoWeAre from './pages/whoweare';
import Alumni from './pages/alumni';
import Recruitment from './pages/recruitment';
import Contact from './pages/contact';
import NavBar from './components/navBar';
import { Container } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <Container>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/brothers' component={Brothers} />
            <Route path='/alumni' component={Alumni} />
            <Redirect to='/home' />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
