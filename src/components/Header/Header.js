import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="Header">
      <header>
        <div className="Header__logo">
          <img className="Header__logo-img" alt="Wild Circus Logo" src="/images/logo.png" />
        </div>
        <div className={menuIsOpen ? "Header__menu--button open" : "Header__menu--button"} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <span className="Header__menu--button-line"></span>
          <span className="Header__menu--button-line"></span>
          <span className="Header__menu--button-line"></span>
        </div>
      </header>
      <div className={menuIsOpen ? "Header__menu slide-down" : "Header__menu slide-up"}>
        <a className="Header__menu--link" href="#t">Lorem ipsum</a>
        <a className="Header__menu--link" href="#t">Lorem ipsum</a>
        <a className="Header__menu--link" href="#t">Lorem ipsum</a>
        <a className="Header__menu--link" href="#t">Lorem ipsum</a>
      </div>
    </div>
  )
};
