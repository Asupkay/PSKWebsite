import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import pskLogo from '../psk-logo-white.svg';

const bStyle ={ backgroundColor: '#c90e3a' };

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
    this.setState({ activeItem: name });
    console.log(this.props);
    this.props.history.push(routeMap[name]);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted borderless style = { bStyle }>
        <Menu.Item>
          <Image src={pskLogo} className="ui mini image" alt="logo" />
        </Menu.Item>
        <Menu.Item header>
          PHI SIGMA KAPPA
        </Menu.Item>
        <Menu.Item name='Home' active={activeItem === '/home'} onClick={this.handleItemClick} />
        <Menu.Item name='Who We Are' active={activeItem === '/who'} onClick={this.handleItemClick} />
        <Menu.Item name='Brothers' active={activeItem === '/brothers'} onClick={this.handleItemClick} />
        <Menu.Item name='Alumni' active={activeItem === '/alumni'} onClick={this.handleItemClick} />
        <Menu.Item name='Recruitment' active={activeItem === '/recruitment'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === '/contact'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default withRouter(NavBar)
