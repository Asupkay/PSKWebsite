import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Brothers from './pages/brothers';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <div className='ui container'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/brothers' component={Brothers} />
            <Redirect to='/home' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
