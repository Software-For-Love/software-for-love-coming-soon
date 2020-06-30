import React from 'react';
import { Link } from 'gatsby';
// import Menu from './Menu';
// import Hamburger from './Hamburger';
import logo from '../images/softwareforlove.svg';
import logoMobile from '../images/softwareforlove.svg';
//import MenuMobile from './MenuMobile';

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
        <h1> Software For Love </h1>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoMobile} />
            </Link>
          </div>
          {/* <h2>Coming Soon!</h2> */}
          {/* <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} /> */}
        </div>
      </div>
    );
  }
}

export default Header;
