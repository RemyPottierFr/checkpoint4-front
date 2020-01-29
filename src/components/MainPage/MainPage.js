import React from 'react';
import "./MainPage.css";
import Header from '../Header/Header';
import Discover from '../Discover/Discover';
import Artists from '../Artists/Artists';

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <Discover />
      <Artists />
    </div>
  )
}
