import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.png';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="Figurit Homepage" src={logo} />
            </Link>
          </div>
        <h1> Software For Love</h1>
        </div>
      </div>
    );
  }
}

export default Header;
