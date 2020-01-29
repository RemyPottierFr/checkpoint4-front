import React from 'react';
import "./Discover.css";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

export default function Discover() {
  return (
    <div className="Discover">
      <h2 className="Discover__title">
        Welcome to Wild Circus !
        <p className="Discover__sub-title">Next show in <span>{Math.floor(Math.random() * 24) + 7}</span> days !</p>
      </h2>
      <button type="button" className="Discover__button">
        <a href="#t">Buy a ticket <Icon icon={faTicketAlt} className="Discover__button-icon" /></a>
      </button>
    </div>
  )
}
