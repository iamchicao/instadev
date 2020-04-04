import React from 'react';
import { ReactComponent as LogoSvg } from '../assets/img/instagram-logo.svg';
import './Topbar.scss';

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>

          <button className="topbar__icon">
            <i className="far fa-paper-plane"/>
          </button>
        </div>
      </header>
    );
  }
}

export default Topbar;
