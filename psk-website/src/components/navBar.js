import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import pskLogo from '../psk-logo-white.svg';

const bStyle ={ backgroundColor: '#c90e3a', borderRadius: 0 };

const routeMap = {
  'Who We Are': 'who',
  'Home': 'home',
  'Brothers': 'brothers',
  'Alumni': 'alumni',
  'Recruitment': 'recruitment',
  'Contact': 'contact'
}

class NavBar extends Component {
  state = { activeItem: 'Home' };

  constructor(props) {
    super(props);
    this.state.activeItem = this.props.history.location.pathname;
  }

  handleItemClick = (e, { name }) => {
    const route = routeMap[name];
    this.setState({ activeItem: `/${route}` });
    this.props.history.push(route);
  };

  render() {
    const { activeItem } = this.state;
    //The home button is bold when unselected (font-weight 700) and goes to normal (400) when selected, idk why this happens
    return (
      <Menu inverted borderless style = { bStyle }>
        <Menu.Item header name='Home' active={activeItem === '/home'} onClick={this.handleItemClick} >
          <Image src={pskLogo} className="ui mini image" alt="logo" />
	   &nbsp;PHI SIGMA KAPPA 
	</Menu.Item>
        <Menu.Item name='Brothers' active={activeItem === '/brothers'} onClick={this.handleItemClick} />
        <Menu.Item name='Alumni' active={activeItem === '/alumni'} onClick={this.handleItemClick} />
        <Menu.Item name='Recruitment' active={activeItem === '/recruitment'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === '/contact'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default withRouter(NavBar)
