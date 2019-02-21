import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import pskLogo from '../psk-logo-white.svg';

const bStyle ={ backgroundColor: '#c90e3a' };

class NavBar extends Component {
 
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
 

  render(props) {
    const { activeItem } = this.state;

    return (
      <Menu inverted borderless style = { bStyle }>
        <Menu.Item>
          <Image src={pskLogo} className="ui mini image" alt="logo" />
        </Menu.Item>
        <Menu.Item header>
          PHI SIGMA KAPPA
        </Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item name='Who We Are' active={activeItem === 'Who We Are'} onClick={this.handleItemClick} />
        <Menu.Item name='Brothers' active={activeItem === 'Brothers'} onClick={this.handleItemClick} />
        <Menu.Item name='Alumni' active={activeItem === 'Alumni'} onClick={this.handleItemClick} />
        <Menu.Item name='Recruitment' active={activeItem === 'Recruitment'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default NavBar
