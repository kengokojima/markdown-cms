import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  render() {
    return (
      <header className="l-header">
        <nav className="p-navbar">
          <a href="/" className="p-navbar__logo">
            <img src={logo} alt="Kaldi" style={{ width: '300px' }} />
          </a>
        </nav>
      </header>
    );
  }
};

export default Header;
